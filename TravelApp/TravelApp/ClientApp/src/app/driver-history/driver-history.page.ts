import { Component, OnInit } from '@angular/core';
import { Order, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';
import * as signalR from '@aspnet/signalr';
import { threadId } from 'worker_threads';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-driver-history',
  templateUrl: './driver-history.page.html',
  styleUrls: ['./driver-history.page.scss'],
})
export class DriverHistoryPage implements OnInit {
  orders: Order[] = [];
  userId = this.accountService.userValue.id;
  orderer : User;

  constructor(private driverService: DriverService,
    private accountService: AccountService,
    private locationPage: Location) { }

  ngOnInit() {
    this.getHistory();

    // const connection = new signalR.HubConnectionBuilder()
    //   .configureLogging(signalR.LogLevel.Information)
    //   .withUrl('https://localhost:44329/orderHub', {
    //     skipNegotiation: true,
    //     transport: signalR.HttpTransportType.WebSockets
    //   })
    //   .build();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.apiUrl}/orderHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in history');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getHistory();
    });
    

    
  }

  getHistory(){
    this.driverService.getDriverHistory(this.userId)
    .subscribe((x: Order[]) => {
      if(this.orders == null){
        console.log("No orders");
        return;
      }
      this.orders = x;
    })
  }

  goBack(){
    this.locationPage.back();
  }
  
}
