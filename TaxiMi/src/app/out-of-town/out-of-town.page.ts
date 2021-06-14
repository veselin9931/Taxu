import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as signalR from '@aspnet/signalr';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubOrder } from '../../_models/suborder';
import { SubOrderOpt } from '../../_models/suporder-opt';
import { AccountService } from '../../_services';
import { OptionsService } from '../../_services/suborder/options.service';
import { SuborderService } from '../../_services/suborder/suborder.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
    selector: 'app-out-of-town',
    templateUrl: './out-of-town.page.html',
    styleUrls: ['./out-of-town.page.scss'],
})
export class OutOfTownPage implements OnInit {


    private options: SubOrderOpt[] = [];
    private subscriptions: Subscription[] = [];
    private user = this.accountService.userValue;
    isLoggedIn: boolean;
    subOrder: SubOrder;
    form: FormGroup;
    status = '';
    isSubmitted = false;
    isCompleted = false;

    constructor(private popoverController: PopoverController, private optionService: OptionsService, private formBuilder: FormBuilder, private subOrderService: SuborderService, private accountService: AccountService) { }


    ngOnInit() {

        this.form = this.formBuilder.group({
            applicationUserId: [''],
            status: 'Waiting',
            info: '',
            date: '',
            time: '',
            optionId: '',
        })

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


        if (!this.form.valid) {
            return;
        } else {
            this.subscriptions.push(this.subOrderService.createSubOrder(this.form.value)
                .subscribe(x => {
                    this.status = this.form.value.status;
                    //this.subscriptions.push(this.subOrderService.getMyOrder(this.user.id)
                   //     .subscribe());
                }))
        }
        console.log(this.subOrder)


    }


    async openLanguagePopover(ev) {
        const popover = await this.popoverController.create({
            component: LanguagePopoverPage,
            event: ev
        });
        await popover.present();
    }

}
