import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { PopoverController } from '@ionic/angular';
import { sub } from 'date-fns/esm/fp';
import { Subscription } from 'rxjs';
import { SubOrder } from '../../_models/suborder';
import { SubOrderOpt } from '../../_models/suporder-opt';
import { AccountService } from '../../_services';
import { OrderService } from '../../_services/order/order.service';
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
        private callNumber: CallNumber)
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

        console.log(this.progressOrders)
   
    }


    getSubOrderByStatusProgress(status: string) {
        this.subscriptions.push(this.subOrderService.getAllSubOrders(status)
            .subscribe(data => {
                if (data == null) {
                    return;
                }

                console.log(data, "Data");
                this.progressOrders = data.filter(o => o.acceptedBy == this.accountService.userValue.id);
                console.log(this.progressOrders, "AfterFilter");
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

                console.log(data, "Data");
                this.mySubOrders = data.filter(o => o.acceptedBy == this.accountService.userValue.id);
                console.log(this.mySubOrders, "AfterFilter");
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
    acceptByUser(subOrder: SubOrder) {

        console.log(subOrder);
        this.subscriptions.push(this.subOrderService.editStatus(subOrder.id, { acceptedBy: this.accountService.userValue.id, status: 'InProgress' })
            .subscribe(data => {
                if (data) {
                    this.subscriptions.push(this.subOrderService.getAllSubOrders('InProgress')
                        .subscribe(data => {
                            if (data == null) {
                                return;
                            }

                            console.log(data);
                            this.subOrders = data;
                            this.progressOrders = this.subOrders.filter(o => o.acceptedBy === this.accountService.userValue.id);

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


            }))
    }

    cancelOrder(subOrder: SubOrder) {
        this.subscriptions.push(this.subOrderService.editStatus(subOrder.id, { acceptedBy: '', status: 'Waiting' })
            .subscribe(data => {
                if (data) {

                }


            }))
    }

    closeOrder(subOrder: SubOrder) {
        this.subscriptions.push(this.subOrderService.editStatus(subOrder.id, { acceptedBy: this.user.id, status: 'Canceled' })
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
