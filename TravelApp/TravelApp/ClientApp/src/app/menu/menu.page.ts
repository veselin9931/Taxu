import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  isLoggedIn;
  driverId: string;
  isVerified: boolean;
  documentConfirmed= false;
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
      url: '/menu/driving'
    }
  ];

  selectedPath = '';
  constructor(private router: Router,
    private accountService: AccountService,
    private driverService: DriverService) {
      this.isLoggedIn = localStorage.getItem("user");
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        if(event.url == "/menu/driving"){
          if(this.isLoggedIn && this.isVerified && this.documentConfirmed && this.driverCars.length >= 1){
            event.url = '/menu/driving'
          }
        }
        //this.selectedPath = event.url;
      }
    });
   }

  ngOnInit() {
    this.checkValues();
    
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.apiUrl}/orderHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in menu');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.checkValues();
    });
  }

  checkValues(){
    this.isLoggedIn = localStorage.getItem("user");

    if (this.isLoggedIn) {
     
      this.accountService.getById(this.accountService.userValue.id)
        .subscribe(x => {
          this.isVerified = x.isDriver;
          // console.log('User -- ')
          // console.log(x)

          if (x.driverId != null) {
            this.driverService.getDriver(x.driverId)
              .subscribe(d => {
                this.driverService.getDriverCars(x.driverId)
                .subscribe(cars => {
                  this.driverCars = cars;
                });

                this.documentConfirmed = d.documentConfirmation;
                // console.log('Driver -- ')
                // console.log(d)
              })
          }
        })
    }else if(this.isLoggedIn == null){
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
}
