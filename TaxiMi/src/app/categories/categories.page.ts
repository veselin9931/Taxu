import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { SuborderService } from '../../_services/suborder/suborder.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  private subscriptions: Subscription[] = [];

  isDrivingNow = this.accountService.userValue.isDrivingNow;
  normalCount: number;
  comfortCount: number;
  allCount: number;
    subOrderCount: number;

  constructor(private popoverController: PopoverController,
    private translate: TranslateService,
    private accountService: AccountService,
    private route: Router,
    public driverService: DriverService,
      private orderService: OrderService,
      private subOrderService: SuborderService
  ) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.getNormalCount();
    this.getComfortCount();
      this.getAllCount();
      this.getSubOrderCount();
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travelling');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('BroadcastMessage', () => {
      this.getNormalCount();
      this.getComfortCount();
      this.getAllCount();
      this.getSubOrderCount();
    });
    
    if (this.isDrivingNow == true) {
      this.route.navigate(['menu/driving']);
    }
  }

  all() {
    this.driverService.categoryType = 'All';
    this.route.navigate(['menu/driving'])
  }

  closest() {
    this.driverService.categoryType = 'Closest';
    this.route.navigate(['menu/driving']);
  }

  normal() {
    this.driverService.categoryType = 'Normal';
    this.route.navigate(['menu/driving']);
  }

  comfort() {
    this.driverService.categoryType = 'Comfort';
    this.route.navigate(['menu/driving']);
  }

  outOfTown(){
    this.driverService.categoryType = 'Out of town';
    this.route.navigate(['menu/driving']);
  }

  booked(){
    this.route.navigate(['menu/booked-travels']);

  }

  getNormalCount() {
    this.subscriptions.push(this.orderService.getNormalOrders()
      .subscribe(x => this.normalCount = x.length))
  }

  getComfortCount() {
    this.subscriptions.push(this.orderService.getComfortOrders()
      .subscribe(x => this.comfortCount = x.length))
  }

  getAllCount() {
    this.subscriptions.push(this.orderService.getAllOrders()
      .subscribe(x => this.allCount = x.length))
    }

    getSubOrderCount() {
        this.subscriptions.push(this.subOrderService.getAllSubOrders('Waiting')
            .subscribe(x => this.subOrderCount = x.length))
    }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ionViewDidLeave() {
    for (const subscription of this.subscriptions) {
      console.log(subscription)
      subscription.unsubscribe();
    }
  }
}
