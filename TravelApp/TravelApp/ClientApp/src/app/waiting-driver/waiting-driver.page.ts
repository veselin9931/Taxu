import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/_models';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-waiting-driver',
  templateUrl: './waiting-driver.page.html',
  styleUrls: ['./waiting-driver.page.scss'],
})
export class WaitingDriverPage implements OnInit {
  private currentOrder: Order;

  constructor(private orderService: OrderService,
    private route: Router) { }

  ngOnInit() {
    this.currentOrder = this.orderService.order;
  }
  completeOrder(){

    this.orderService.completeOrder(this.currentOrder.id)
    .subscribe(data => {
      this.route.navigate(['tabs/travelling']);
      console.log(data)
    });
  }



  goBack() {
    this.route.navigate(['tabs/travelling']);
  }
}
