import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Order } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection
  signalReceived = new EventEmitter<Order>();

  // constructor(){
  //   this.buildConnection();
  //   this.startConnection();
  // }

  // private buildConnection = () => {
  //   this.hubConnection = new signalR.HubConnectionBuilder()
  //   .withUrl('https://localhost:44329/orderHub', {
  //     skipNegotiation: true,
  //     transport: signalR.HttpTransportType.WebSockets
  //   })
  //   .build();
  // }

  // private startConnection = () => {
  //   this.hubConnection
  //     .start()
  //     .then(() => {
  //       console.log('Connection started')
  //       this.registerSignalEvents()
  //     })
  //     .catch(err => {
  //       console.log('Error while starting connection: ' + err);
  //     });
  // };

  // private registerSignalEvents = () => {
  //   this.hubConnection.on('Order Received', (data: Order) => {
  //     this.signalReceived.emit(data);
  //   });
  // }
}





