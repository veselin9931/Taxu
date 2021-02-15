import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalr';        // import signalR
import { HttpClient } from '@angular/common/http';
import { Message } from '../../_models'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // private connection: any = new signalR.HubConnectionBuilder()
  //   .withUrl('https://localhost:44329/orderHub', {
  //     skipNegotiation: true,
  //     transport: signalR.HttpTransportType.WebSockets
  //   })
  //   .build();

  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl('http://192.168.0.2:3000/orderHub', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

  //readonly POST_URL = "https://localhost:44329/api/chat/send";

  readonly POST_URL = "http://192.168.0.2:3000/api/chat/send";


  private receivedMessageObject: Message = new Message();
  private sharedObj = new Subject<Message>();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    this.connection.on("MessageReceived", (user, message) => { this.mapReceivedMessage(user, message); });
    this.start();
  }

  // Strart the connection
  public async start() {
    try {
      await this.connection.start();
      console.log("connected");
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }

  private mapReceivedMessage(user: string, message: string): void {
    this.receivedMessageObject.user = user;
    this.receivedMessageObject.text = message;
    this.sharedObj.next(this.receivedMessageObject);
  }

  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  public broadcastMessage(msgDto: any) {
    this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
    // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
  }

  public retrieveMappedObject(): Observable<Message> {
    return this.sharedObj.asObservable();
  }

}
