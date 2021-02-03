import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {
  user = this.accountService.userValue;
  
  constructor(private accountService: AccountService,
    private route: Router,
    private location: Location) { }
  
  ngOnInit() {
  }

  openHistory(){
    this.route.navigate(['tabs/driver-history']);
  }

  goBack(){
    this.location.back();
  }

}
