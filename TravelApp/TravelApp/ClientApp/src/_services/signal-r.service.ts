import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { EventEmitter } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { Order } from '../_models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order/order.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  // public messages = [];
  // private connection: any = new signalR.HubConnectionBuilder()
  //   .withUrl(`${environment.signalRUrl}/orderHub`)
  //   .build();

  // private receivedMessageObject: Order[];
  // private sharedObj = new Subject<Order[]>();

  // constructor(private http: HttpClient,
  //   private orderService: OrderService) {

  //   this.connection.onclose(async () => {
  //     await this.start();
  //   });
  //   this.connection.on("BroadcastOrder", () => {
  //     this.orderService.get45Orders()
  //     .subscribe(x => {
  //       this.receivedMessageObject = x;
  //       this.mapReceivedMessage();
  //     })
  //   });
  //   this.start();
  // }

  // public async stop() {
  //   await this.connection.stop();
  //   console.log('Disconnected')
  // }

  // // Start the connection
  // public async start() {
  //   try {
  //     await this.connection.start();
  //     console.log("connected in orders");

  //   } catch (err) {
  //     console.log(err);
  //     console.log("Reoonnecting in 1 sec.");
  //     setTimeout(() => this.start(), 1000);
  //   }
  // }

  // private mapReceivedMessage(): void {
  //   this.messages.push(this.receivedMessageObject);
  //   this.sharedObj.next(this.receivedMessageObject);
  // }

  // public retrieveMappedObject(): Observable<Order[]> {
  //   return this.sharedObj.asObservable();
  // }
}



