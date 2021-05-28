import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavouriteOrder } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-favourite-orders',
  templateUrl: './favourite-orders.page.html',
  styleUrls: ['./favourite-orders.page.scss'],
})
export class FavouriteOrdersPage implements OnInit {
  favourites = [];
  private subscriptions: Subscription[] = [];
  constructor(private orderService: OrderService,
    private accountService: AccountService,
    private alertController: AlertController,
    private route: Router,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.getMyOrders();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travelling');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getMyOrders();
    });

  }

  ionViewDidLeave() {
    for (const subscription of this.subscriptions) {
      console.log(subscription)
      subscription.unsubscribe();
    }
  }

  getMyOrders() {
    this.subscriptions.push(this.orderService.getMyFavourites(this.accountService.userValue.id)
      .subscribe(x => {
        this.favourites = x;
      }))
  }

  useThis(favouriteOrder: FavouriteOrder) {
    this.orderService.selectedFavourite = favouriteOrder;
    this.route.navigate(['menu/travelling'])
  }

  remove(id: string) {
    this.subscriptions.push(this.orderService.deleteFavouriteOrder(id)
      .subscribe(x => {
        this.successDeletedFavourite();
      }))
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async successDeletedFavourite() {
    const popup = await this.alertController.create({
      header: 'Successfully removed the trip!',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });

    await popup.present();

  }
}
