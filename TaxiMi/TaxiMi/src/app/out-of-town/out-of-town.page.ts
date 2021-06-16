import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as signalR from '@aspnet/signalr';
import { IonDatetime, PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubOrder } from '../../_models/suborder';
import { SubOrderOpt } from '../../_models/suporder-opt';
import { AccountService } from '../../_services';
import { OptionsService } from '../../_services/suborder/options.service';
import { SuborderService } from '../../_services/suborder/suborder.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { format } from "date-fns";
import { DriverService } from '../../_services/driver/driver.service';
import { Driver, User } from '../../_models';

@Component({
    selector: 'app-out-of-town',
    templateUrl: './out-of-town.page.html',
    styleUrls: ['./out-of-town.page.scss'],
})
export class OutOfTownPage implements OnInit {
    customPickerOptions: any;

    @ViewChild('myd') myd: IonDatetime;
    @ViewChild('myt') myt: IonDatetime;

    public options;
    private subscriptions: Subscription[] = [];
    private user = this.accountService.userValue;
    isLoggedIn: boolean = false;
    subOrder: SubOrder;
    driver: User;
    subOrderId: string;
    form: FormGroup;
    status = '';
    isSubmitted = false;
    isCompleted = false;
    isAccepted = false;

    constructor(private popoverController: PopoverController,
        private optionService: OptionsService,
        private formBuilder: FormBuilder,
        private subOrderService: SuborderService,
        private accountService: AccountService,
        private driverService: DriverService
    ) { }


    ngOnInit() {
        if (this.user.token) {
            this.isLoggedIn = true;
        }

       
        this.form = this.formBuilder.group({
            applicationUserId: this.user.id,
            status: 'Waiting',
            info: '',
            date: '',
            time: '',
            optionsId: '',
            acceptedBy: ''
        })

        this.subscriptions.push(this.subOrderService.getSubOrderByUserId(this.user.id)
            .subscribe(x => {
                if (x) {
                    console.log(x);
                    this.subOrder = x;
                    this.subOrder.isAccepted = x.acceptedBy != '';
                    this.isAccepted = x.acceptedBy != '';
                    this.isSubmitted = true;

                    if (this.subOrder.isAccepted) {

                        this.accountService.getById(this.subOrder.acceptedBy).subscribe(
                            d => {
                                let dr = d;
                                this.driver = dr;

                                console.log(this.driver);
                            }
                        );
                    }
                }

            }));

        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();

        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err);
        });

        connection.on('CreatedSubOrder', () => {
        });

        this.getMyOptions();

    }


    getMyOptions() {
        this.subscriptions.push(this.optionService.getOptions()
            .subscribe(x => {
                this.options = x;
            }))
    }


    onSubmit() {
        this.isSubmitted = true;

         console.log(format(new Date(this.myd.value), "yyyy-MM-dd"), format(new Date(this.myt.value), "HH-mm"));

         this.form.patchValue({
             time: format(new Date(this.myd.value), "MM-dd"),
             date: format(new Date(this.myt.value), "HH-mm")
         });

        if (!this.form.valid) {
            return;
        } else {
            console.log(this.form.value);
            this.subscriptions.push(this.subOrderService.createSubOrder(this.form.value)
                .subscribe(x => {
                    
                    this.status = this.form.value.status;
                    this.subOrderId = x;

                    this.subscriptions.push(this.subOrderService.getSubOrderByUserId(this.user.id)
                        .subscribe(x => {
                            this.subOrder = x;
                        }));

                }))
        }
    }


    cancelOrder() {
                this.subscriptions.push(this.subOrderService.deleteOrder(this.subOrder.id)
                    .subscribe(() => {
                        this.isCompleted = false;
                        this.isSubmitted = false;
                    }))
    }

    async openLanguagePopover(ev) {
        const popover = await this.popoverController.create({
            component: LanguagePopoverPage,
            event: ev
        });
        await popover.present();
    }

}
