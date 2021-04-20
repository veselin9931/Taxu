import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { EventEmitter } from '@angular/core';
import { from, Subject } from 'rxjs';
import { Order } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  // public data: Order[];
  // private hubConnection: signalR.HubConnection;
  // private componentMethodCallSource = new Subject<any>();
  // componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  // public startConnection = () => {
  //   this.hubConnection = new signalR.HubConnectionBuilder()
  //     .withUrl(`${environment.signalRUrl}/orderHub`)
  //     .build();

  //   this.hubConnection
  //     .start()
  //     .then(() => console.log('Connection started'))
  //     .catch(err => console.log('Error while starting connection: ' + err))
  // }
}



