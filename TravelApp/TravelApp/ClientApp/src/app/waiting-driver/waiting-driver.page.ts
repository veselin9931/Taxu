import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-waiting-driver',
  templateUrl: './waiting-driver.page.html',
  styleUrls: ['./waiting-driver.page.scss'],
})
export class WaitingDriverPage implements OnInit {
  private currentOrder: Order;
  private driverData: User;
  constructor(private orderService: OrderService,
    private route: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.currentOrder = this.orderService.order;

    this.accountService.getById(this.currentOrder.acceptedBy)
        .subscribe(userData => {
          this.driverData = userData;
          console.log(userData)
        })

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
