import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  isLoggedIn;
  driverId: string;
  isVerified: boolean;
  documentConfirmed= false;
  driverCars = [];
  constructor(private accountService: AccountService,
    private driverService: DriverService,
    private route: Router) {
    this.isLoggedIn = localStorage.getItem("user");

  }
  ngOnInit(): void {
    if(this.isLoggedIn){
      this.route.navigate(['tabs/travelling']);
    }
    this.checkValues();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:44329/orderHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in tabs');
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
          console.log('User -- ')
          console.log(x)

          if (x.driverId != null) {
            this.driverService.getDriver(x.driverId)
              .subscribe(d => {
                this.driverService.getDriverCars(x.driverId)
                .subscribe(cars => {
                  this.driverCars = cars;
                });

                this.documentConfirmed = d.documentConfirmation;
                console.log('Driver -- ')
                console.log(d)
              })
          }
        })
    }else{
        this.route.navigate(['tabs/home']);
    }
  }
}
