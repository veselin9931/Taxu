import { Component, OnInit } from '@angular/core';
import { Order, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-driver-history',
  templateUrl: './driver-history.page.html',
  styleUrls: ['./driver-history.page.scss'],
})
export class DriverHistoryPage implements OnInit {
  orders: Order[] = [];
  userId = this.accountService.userValue.id;
  orderer : User;

  constructor(private driverService: DriverService,
    private accountService: AccountService,
    private locationPage: Location) { }

  ngOnInit() {
    this.driverService.getDriverHistory(this.userId)
    .subscribe((x: Order[]) => {
      this.orders = x;
    })

    
  }

  goBack(){
    this.locationPage.back();
  }
  
}
