import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  dataReceived = new EventEmitter<string>();
  private hubConnection: any;
  constructor() {
  }

  init() {
    this.createConnection();
    this.startConnection();
  }
  private createConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    // this.hubConnection.onclose(err => {
    //   console.log('SignalR hub connection closed.');
    //   this.stopHubAndunSubscribeToServerEvents();
    //   this.restartConnection(err);
    // });
  }
  private restartConnection(err: Error): void {
    console.log(`Error ${err}`);
    console.log('Retrying connection to SignalR Hub ...');
    setTimeout(() => {
      this.startConnection();
    }, 10000);
  }
  private startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR Hub connection started');
        //this.subscribeToServerEvents();
      })
      .catch(err => {
        this.restartConnection(err);
      });

      this.hubConnection.on('CreatedOrder', () => {});

      this.hubConnection.on('BroadcastMessage', () => { console.log('xoxo')});

      this.hubConnection.on('CreatedAccount', () => {});

      this.hubConnection.on('OnUpload', () => {});

      this.hubConnection.on('LoggedIn', () => {});

      this.hubConnection.on('CarAction', () => {});

      this.hubConnection.on('WalletAction', () => {});

      this.hubConnection.on('Voted', () => {});

      this.hubConnection.on('LocateDriver', () => {});

      this.hubConnection.on('Navigate', () => {});

      this.hubConnection.on('IncrementDecrement', () => {});

      this.hubConnection.on('OfferMorePrice', () => {});

      this.hubConnection.on('NotifyDriver', () => {});

      this.hubConnection.on('NotifyArrived', () => {});

      this.hubConnection.on('OrderAccepted', () => {});

      this.hubConnection.on('CompleteOrder', () => {});

      this.hubConnection.on('OrderWaiting', () => {});

      this.hubConnection.on('OrderDeleted', () => {});

      this.hubConnection.on('MessageReceived', () => {});

      this.hubConnection.on('StartTrip', () => {});
  }
}
