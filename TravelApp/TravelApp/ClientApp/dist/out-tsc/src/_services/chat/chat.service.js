import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'; // import signalR
import { Message } from '../../_models';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
let ChatService = class ChatService {
    constructor(http, accountService, orderService) {
        this.http = http;
        this.accountService = accountService;
        this.orderService = orderService;
        this.messages = [];
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        this.POST_URL = `${environment.signalRUrl}/api/chat/send`;
        this.receivedMessageObject = new Message();
        this.sharedObj = new Subject();
        // this.connection.onclose(async () => {
        //   await this.start();
        // });
        this.connection.on("MessageReceived", (user, message) => {
            this.mapReceivedMessage(user, message);
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.stop();
            console.log('Disconnected');
        });
    }
    // Start the connection
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.start();
                yield this.orderService.getOrderForChat(this.accountService.userValue.id)
                    .subscribe(x => {
                    if (this.orderService.currentOrderId) {
                        this.connection.invoke("AddToRoom", this.orderService.currentOrderId);
                    }
                    else {
                        if (x == null) {
                        }
                        else {
                            this.connection.invoke("AddToRoom", x.id);
                        }
                    }
                });
                console.log("connected in chat");
            }
            catch (err) {
                console.log(err);
                console.log("Reoonnecting in 1 sec.");
                setTimeout(() => this.start(), 1000);
            }
        });
    }
    mapReceivedMessage(user, message) {
        this.receivedMessageObject.user = user;
        this.receivedMessageObject.text = message;
        this.messages.push(this.receivedMessageObject);
        this.sharedObj.next(this.receivedMessageObject);
    }
    broadcastMessage(msgDto) {
        this.orderService.getOrderForChat(this.accountService.userValue.id)
            .subscribe(x => {
            if (x.id) {
                this.http.post(`${this.POST_URL}/${x.id}`, msgDto).subscribe(() => { });
            }
        });
    }
    retrieveMappedObject() {
        return this.sharedObj.asObservable();
    }
};
ChatService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map