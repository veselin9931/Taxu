import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Order } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: Order[];
  private hubConnection: signalR.HubConnection
  signalReceived = new EventEmitter<Order>();

//   public startConnection = () => {
//     this.hubConnection = new signalR.HubConnectionBuilder()
//     .withUrl('https://localhost:44329/orderHub', {
//       skipNegotiation: true,
//       transport: signalR.HttpTransportType.WebSockets
//     })
// .build();

// this.hubConnection
//       .start()
//       .then(() => console.log('Connection started'))
//       .catch(err => console.log('Error while starting connection: ' + err))
//   }

//   public transferOrdersListener = () => {
//     this.hubConnection.on('BroadcastMessage', (data) => {
//       this.data = data;
//       console.log(data);
//     });
//   }
}





