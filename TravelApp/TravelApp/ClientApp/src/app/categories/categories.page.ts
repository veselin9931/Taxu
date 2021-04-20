import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  normalCount: number;
  comfortCount: number;
  allCount: number;
  constructor(private popoverController: PopoverController,
    private translate: TranslateService,
    private accountService: AccountService,
    private route: Router,
    private driverService: DriverService,
    private orderService: OrderService) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.getNormalCount();
    this.getComfortCount();
    this.getAllCount();
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
    });
    
    if (this.isDrivingNow == true) {
      this.route.navigate(['menu/driving']);
    }
  }

  all() {
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

  getNormalCount() {
    this.orderService.getNormalOrders()
      .subscribe(x => this.normalCount = x.length)
  }

  getComfortCount() {
    this.orderService.getComfortOrders()
      .subscribe(x => this.comfortCount = x.length)
  }

  getAllCount() {
    this.orderService.getAllOrders()
      .subscribe(x => this.allCount = x.length)
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }
}
