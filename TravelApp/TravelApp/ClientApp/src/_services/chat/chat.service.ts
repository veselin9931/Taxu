import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalr';        // import signalR
import { HttpClient } from '@angular/common/http';
import { Message } from '../../_models'
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountService } from '../account.service';
import { OrderService } from '../order/order.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private orderId = '';
  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.apiUrl}/orderHub`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

  readonly POST_URL = `${environment.apiUrl}/api/chat/send`;

  private receivedMessageObject: Message = new Message();
  private sharedObj = new Subject<Message>();

  constructor(private http: HttpClient,
    private accountService: AccountService,
    private orderService: OrderService) {

    this.connection.onclose(async () => {
      await this.start();
    });
    this.connection.on("MessageReceived", (user, message) => {
      this.mapReceivedMessage(user, message);
    });
    this.start();
  }

  public async stop() {
    await this.connection.stop();
    console.log('Disconnected')
  }

  // Start the connection
  public async start() {
    try {
      await this.connection.start();

      await this.orderService.getOrderForChat(this.accountService.userValue.id)
        .subscribe(x => {
         if (this.orderService.currentOrderId) {
            this.connection.invoke("AddToRoom", this.orderService.currentOrderId);
          } else{
            if(x == null){
            }else{
              this.connection.invoke("AddToRoom", x.id);
            }
          }
        });

      console.log("connected in chat");
    } catch (err) {
      console.log(err);
      console.log("Reoonnecting in 1 sec.");
      setTimeout(() => this.start(), 100);
    }
  }

  private mapReceivedMessage(user: string, message: string): void {
    this.receivedMessageObject.user = user;
    this.receivedMessageObject.text = message;
    this.sharedObj.next(this.receivedMessageObject);
  }

  public broadcastMessage(msgDto: any, groupName: string) {
    this.orderService.getOrderForChat(this.accountService.userValue.id)
      .subscribe(x => {
        if (x.id) {
          this.http.post(`${this.POST_URL}/${x.id}`, msgDto).subscribe(data => console.log(data));
        }
      });
  }

  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }

}
