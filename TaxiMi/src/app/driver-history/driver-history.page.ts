import { Component, OnInit } from '@angular/core';
import { Order, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
@Component({
  selector: 'app-driver-history',
  templateUrl: './driver-history.page.html',
  styleUrls: ['./driver-history.page.scss'],
})
export class DriverHistoryPage implements OnInit {
  private subscriptions: Subscription[] = [];

  orders: Order[] = [];
  userId = this.accountService.userValue.id;
  orderer : User;
  dailyProfit: string;
  currentDate = new Date();
  constructor(private driverService: DriverService,
    private accountService: AccountService,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private translate: TranslateService) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.getHistory();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in history');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getHistory();
    });
  }

  ionViewDidLeave() {
    for (const subscription of this.subscriptions) {
      console.log(subscription)
      subscription.unsubscribe();
    }
  }

  getHistory(){
    this.subscriptions.push(this.driverService.getDriverHistory(this.userId)
    .subscribe((x: Order[]) => {
      if(this.orders == null){
        console.log("No orders");
        return;
      }
      this.orders = x;
      let sum: number = 0;
      x.forEach(order => {
        sum += order.totalPrice;
      });
      this.dailyProfit = sum.toFixed(2);
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
