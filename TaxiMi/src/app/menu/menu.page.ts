import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Subscription } from 'rxjs';
import { HttpTransportType } from '@aspnet/signalr';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private subscriptions: Subscription[] = [];

  isLoggedIn;
  driverId: string;
  isVerified: boolean;
  documentConfirmed = false;
  driverCars = [];
  accessedPath = "";

  pages = [
    {
      title: "Travel",
      url: '/menu/travelling'
    },
    {
      title: "Profile",
      url: '/menu/driver-profile'
    },
    {
      title: "Drive",
      url: '/menu/categories'
    },
    {
      title: "Report",
      url: '/menu/report'
    },
    {
      title: "Favourites",
      url: '/menu/favourite-orders'
    }
  ];

  selectedPath = '';
  constructor(private router: Router,
    private accountService: AccountService,
    private driverService: DriverService,
    private translate: TranslateService,
    private popoverController: PopoverController,
    private backgroundMode: BackgroundMode) {
    this.isLoggedIn = localStorage.getItem("user");
    if (this.isLoggedIn) {
      this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
      this.backgroundMode.enable();
    } else {
      this.translate.setDefaultLang('en');
    }
    this.subscriptions.push(this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        if (event.url == "/menu/driving") {
          if (this.isLoggedIn && this.isVerified && this.documentConfirmed && this.driverCars.length >= 1) {
            event.url = '/menu/driving'
          }
        }
        //this.selectedPath = event.url;
      }
    }));
  }

  ngOnInit() {
    this.checkValues();
    //  const connection = new signalR.HubConnectionBuilder()
    //    .configureLogging(signalR.LogLevel.Information)
    //    .withUrl(`${environment.signalRUrl}/orderHub`, {
    //     skipNegotiation: true,
    //     transport: signalR.HttpTransportType.WebSockets})
    //    .build();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in menu');
    }).catch(function (err) {
      console.log("Reconnecting in 1 sec.");
      setTimeout(() => connection.start(), 1000);
    });

    connection.on('BroadcastMessage', () => {
      this.checkValues();
    });

    connection.on('LoggedIn', () => {
      this.checkValues();
    });

    connection.on('CreatedOrder', () => {

    });

    connection.on('OrderDeleted', () => {

    });

    connection.on('WalletAction', () => {

    });

    connection.on('CompleteOrder', () => {

    });
  }

  // ionViewDidLeave() {
  //   for (const subscription of this.subscriptions) {
  //     console.log(subscription)
  //     subscription.unsubscribe();
  //   }
  // }

  checkValues() {
    this.isLoggedIn = localStorage.getItem("user");

    if (this.isLoggedIn) {

      this.subscriptions.push(this.accountService.getById(this.accountService.userValue.id)
        .subscribe(x => {
          this.isVerified = x.isDriver;

          if (x.driverId != null) {
            this.subscriptions.push(this.driverService.getDriver(x.driverId)
              .subscribe(d => {
                this.subscriptions.push(this.driverService.getDriverCars(x.driverId)
                  .subscribe(cars => {
                    this.driverCars = cars;
                  }));

                this.documentConfirmed = d.documentConfirmation;
              }))
          }
        }))
    } else if (this.isLoggedIn == null) {
      this.router.navigate(['menu/home']);
    }
  }

  logout() {
    this.accountService.logout();
    this.isLoggedIn = "";
    this.router.navigate(['menu/home'])
      .then(() => {
        window.location.reload();
      })
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }
}
