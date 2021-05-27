import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { Location } from '@angular/common';
import { DriverService } from 'src/_services/driver/driver.service';
import { Car } from 'src/_models/car';
import * as signalR from '@aspnet/signalr';
import { AlertController, PopoverController } from '@ionic/angular';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { Driver } from 'src/_models';
import { ImageService } from 'src/_services/image/image.service';
import { HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {
  user = this.accountService.userValue;
  private driverId = this.user.driverId;
  referral: string;
  driverCars: Car[];
  carsCount = 0;
  walletAmount: number;
  isActiveCar: boolean;
  driver: Driver;
  rating: string;
  driverCommission: number;
  folderName = "driverFacePic";
  imgPath: string;
  imgType = "profile";
  public progress: number;
  public message: string;

  constructor(private accountService: AccountService,
    private driverService: DriverService,
    private route: Router,
    private location: Location,
    private alertController: AlertController,
    private walletService: WalletService,
    private imageService: ImageService,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.getDriver();
    this.getProfilePicture();
    this.getWalletAmount();
    this.getCars();
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in profile');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('Voted', (driverId) => {
      if (this.driverId == driverId) {
        this.getDriver();
      }
    });

    connection.on('CarAction', (driverId) => {
      if (this.driverId == driverId) {
        this.getCars();
      }
    });

    connection.on('WalletAction', (userId) => {
      this.getWalletAmount();
    });

    connection.on('BroadcastMessage', () => {
      this.getProfilePicture();
    });
  }

  copy(referral: string) {
    console.log(referral)
  }

  getProfilePicture() {
    this.imageService.getMyPicture(this.user.id)
      .subscribe(x => {
        if (x == null) {
          return;
        }
        this.imgPath = x.path;
      })
  }

  upload(files) {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.imageService.upload(formData, this.folderName, this.user.id, this.imgType)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
        }
      })
  }

  getDriver() {
    this.driverService.getDriver(this.driverId)
      .subscribe(d => {
        if (d == null) {
          console.log('No driver');
          return;
        }
        this.driver = d;
        this.rating = d.rating.toFixed(2);
        this.driverCommission = d.comission;
        (Math.round(this.driverCommission * 100) / 100).toFixed(2);
        this.referral = this.driver.referal;
      })
  }

  getWalletAmount() {
    this.walletService.getMyWallet(this.user.id)
      .subscribe(x => {
        if (x.ammount) {
          this.walletAmount = x.ammount;
        } else {
          this.walletAmount = 0;
        }
      })
  }

  getCars() {
    this.driverService.getDriverCars(this.driverId)
      .subscribe(d => {
        if (d == null) {
          console.log('No cars');
          return;
        }
        this.driverCars = d;
        this.carsCount = this.driverCars.length;
      })
  }

  openHistory() {
    this.route.navigate(['menu/driver-history']);
  }

  addNewCar() {
    this.route.navigate(['menu/car-register'])
  }

  active(car: Car) {
    if (car.isActive) {
      return;
    }

    if (car.confirmation == false) {
      this.presentAlert();
      return;
    }

    this.driverService.activeCar(car.id, car.driverId)
      .subscribe(x => {
        this.isActiveCar = x.isActive;
        console.log(x);
      })
  }

  deleteCar(id: string) {
    this.driverService.deleteCar(id)
      .subscribe(x => {
        console.log(x);
      })
  }

  goBack() {
    this.location.back();
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Your car is not confirmet yet.',
      buttons: ['OK']
    });

    await alert.present();
  }

  chargeCash() {
    this.route.navigate(['menu/payments'])
  }
}
