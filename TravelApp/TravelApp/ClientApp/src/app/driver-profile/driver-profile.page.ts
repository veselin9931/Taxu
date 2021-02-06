import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { Location } from '@angular/common';
import { DriverService } from 'src/_services/driver/driver.service';
import { Car } from 'src/_models/car';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';
import { WalletService } from 'src/_services/wallet/wallet.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {
  user = this.accountService.userValue;
  driverId: string;
  driverCars: Car[];
  walletAmount: number;
  isActiveCar: boolean;

  constructor(private accountService: AccountService,
    private driverService: DriverService,
    private route: Router,
    private location: Location,
    private alertController: AlertController,
    private walletService: WalletService) { }

  ngOnInit() {
    this.getWalletAmount();
    this.getCars();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:44329/orderHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in profile');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getCars();
      this.getWalletAmount();
    });


  }

  getWalletAmount(){
    this.walletService.getMyWallet(this.user.id)
    .subscribe(x => {
      if(x.ammount){
        this.walletAmount = x.ammount;
      }else{
        this.walletAmount = 0;
      }
    })
  }

  getCars() {
    this.accountService.getById(this.user.id)
      .subscribe(x => {
        this.driverService.getDriverCars(x.driverId)
          .subscribe(d => {
            if (d == null) {
              console.log('No cars');
              return;
            }

            this.driverCars = d;
            console.log(this.driverCars)
          })
      })
  }

  openHistory() {
    this.route.navigate(['tabs/driver-history']);
  }

  addNewCar() {
    this.route.navigate(['tabs/register-car'])
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Your car is not confirmet yet.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentPrompt() {
    const popup = await this.alertController.create({
      header: 'Charge cash',
      inputs: [
        {
          name: 'Amount',
          placeholder: 'Amount'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: data => {
            if(data.Amount != "" && data.Amount > 0){
              let amount = +data.Amount;
              this.walletService.chargeWallet(this.user.id, amount)
              .subscribe(w => {
                this.chargeAlertSuccess(amount);
              })
              console.log(data)
            } else {
              this.chargeAlertFail();
            }
          }
        }
      ]
    });
    
    await popup.present();
    
  }

  async chargeAlertFail() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Amount must be more than 0$',
      buttons: ['OK']
    });

    await alert.present();
  }

  async chargeAlertSuccess(amount: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: `You have successfully charged your wallet with ${amount}$.`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
