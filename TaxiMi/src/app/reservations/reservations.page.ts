import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { SubOrder } from '../../_models/suborder';
import { SubOrderOpt } from '../../_models/suporder-opt';
import { AccountService } from '../../_services';
import { OptionsService } from '../../_services/suborder/options.service';
import { SuborderService } from '../../_services/suborder/suborder.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

    constructor(private popoverController: PopoverController,
        private accountService: AccountService,
        private subOrderService: SuborderService,
        private optionsService: OptionsService,
        private callNumber: CallNumber,
        private route: Router,
    )
    { }

    public options;
    private subscriptions: Subscription[] = [];
    private user = this.accountService.userValue;
    isLoggedIn: boolean = false;
    inProgress: boolean = false;
    subOrders: SubOrder[] = [];
    mySubOrders: SubOrder[] = [];
    progressOrders: SubOrder[] = [];
    new: SubOrder[];

    ngOnInit() {
        if (this.user.token) {
            this.isLoggedIn = true;
        }

        this.getSubOrderByStatusAccepted('Accepted');
        this.getSubOrderByStatusProgress('InProgress');


        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();

        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err);
        });

        connection.on('InProgressSubOrder', (id) => {
            this.getSubOrderByStatusAccepted('Accepted');
            this.getSubOrderByStatusProgress('InProgress');
        });

        connection.on('FinishSubOrder', (id) => {
            this.getSubOrderByStatusAccepted('Accepted');
            this.getSubOrderByStatusProgress('InProgress');
        });

        connection.on('OrderDeleted', (id) => {
            this.getSubOrderByStatusAccepted('Accepted');
            this.getSubOrderByStatusProgress('InProgress');
        });

        connection.on('AcceptSubOrder', (id) => {
            this.getSubOrderByStatusAccepted('Accepted');
            this.getSubOrderByStatusProgress('InProgress');
        });

    }


    getSubOrderByStatusProgress(status: string) {
        this.subscriptions.push(this.subOrderService.getAllSubOrders(status)
            .subscribe(data => {
                if (data == null) {
                    return;
                }

                console.log(data, "Progress");
                this.progressOrders = data.filter(o => o.acceptedBy == this.accountService.userValue.id);
                this.progressOrders.forEach(o => {
                    let id = o.optionsId;
                    this.optionsService.getOptionById(id).subscribe(data => {
                        let opt: SubOrderOpt = data;
                        o.location = opt.location
                        o.destination = opt.destination

                    });
                })
            }));
    }

    getSubOrderByStatusAccepted(status: string) {
        this.subscriptions.push(this.subOrderService.getAllSubOrders(status)
            .subscribe(data => {
                if (data == null) {
                    return;
                }

                console.log(data, "Accepted");
                this.mySubOrders = data.filter(o => o.acceptedBy == this.accountService.userValue.id);
                this.mySubOrders.forEach(o => {
                    let id = o.optionsId;
                    this.optionsService.getOptionById(id).subscribe(data => {
                        let opt: SubOrderOpt = data;
                        o.location = opt.location
                        o.destination = opt.destination

                    });
                })
            }));
    }

    acceptByUser(orderid) {
        this.subscriptions.push(this.subOrderService.inProgressSubOrders(orderid)
            .subscribe(data => {
                if (data) {
                    this.getSubOrderByStatusProgress('InProgress');
                }


            }))
    }

    cancelOrder(subOrder: SubOrder) {
        this.subscriptions.push(this.subOrderService.refuseSubOrder(subOrder.id)
            .subscribe(data => {
                if (data) {
                    this.route.navigate(['menu/categories'])
                }


            }))
    }

    closeOrder(subOrder: SubOrder) {
        this.subscriptions.push(this.subOrderService.closedSubOrder(subOrder.id)
            .subscribe(data => {
                if (data) {
                    this.subOrderService.deleteOrder(subOrder.id).subscribe(data => {
                        if (data) {

                        }
                    })
                }
            }))
    }

    callToUser(userphone: string) {
        let phone = userphone.toString();
        this.callNumber.callNumber(phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

    async openLanguagePopover(ev) {
        const popover = await this.popoverController.create({
            component: LanguagePopoverPage,
            event: ev
        });
        await popover.present();
    }

}
