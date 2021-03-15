import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FavouriteOrder } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-favourite-orders',
  templateUrl: './favourite-orders.page.html',
  styleUrls: ['./favourite-orders.page.scss'],
})
export class FavouriteOrdersPage implements OnInit {
  favourites = [];

  constructor(private orderService: OrderService,
    private accountService: AccountService,
    private alertController: AlertController,
    private route: Router) { }

  ngOnInit() {
    this.getMyOrders();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.apiUrl}/orderHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
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

  getMyOrders(){
      this.orderService.getMyFavourites(this.accountService.userValue.id)
      .subscribe(x => {
        this.favourites = x;
      })
  }

  useThis(favouriteOrder: FavouriteOrder){
    this.orderService.selectedFavourite = favouriteOrder;
    this.route.navigate(['menu/travelling'])
  }

  remove(id: string){
    this.orderService.deleteFavouriteOrder(id)
    .subscribe(x => {
      this.successDeletedFavourite();
    })
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
