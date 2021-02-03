import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {
  user = this.accountService.userValue;
  
  constructor(private accountService: AccountService,
    private route: Router) { }
  
  ngOnInit() {
  }

  openHistory(){
    this.route.navigate(['tabs/driver-history']);
  }

}
