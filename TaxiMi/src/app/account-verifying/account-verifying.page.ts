import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';

@Component({
  selector: 'app-account-verifying',
  templateUrl: './account-verifying.page.html',
  styleUrls: ['./account-verifying.page.scss'],
})
export class AccountVerifyingPage implements OnInit {
  private user = this.accountService.userValue;

  constructor(private route: Router,
    private accountService: AccountService,
    private driverService: DriverService) { }

  ngOnInit() {
    this.getUser();
  }
  
  getUser(){
    this.accountService.getById(this.user.id)
    .subscribe(x => {
      this.driverService.getDriver(x.driverId)
      .subscribe(driver => {
        if(driver.documentConfirmation == true){
          this.route.navigate(['menu/driver-profile'])
        }
        console.log(driver)
      })
    })
  }
}
