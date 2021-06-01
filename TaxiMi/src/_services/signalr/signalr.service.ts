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

    this.hubConnection.onclose(err => {
      console.log('SignalR hub connection closed.');
      this.stopHubAndunSubscribeToServerEvents();
      this.restartConnection(err);
    });
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
        this.subscribeToServerEvents();
      })
      .catch(err => {
        this.restartConnection(err);
      });
  }
  
  private subscribeToServerEvents(): void {
    this.hubConnection.on('CreatedOrder', (data: any) => {
      this.dataReceived.emit('CreatedOrder:' + data);
    });

  }
  private stopHubAndunSubscribeToServerEvents(): void {
    this.hubConnection.off('CreatedOrder');
    this.hubConnection.stop().then(() => console.log('Hub connection stopped'));
  }
}
