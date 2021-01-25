import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';

@Component({
  selector: 'app-home-logged',
  templateUrl: './home-logged.page.html',
  styleUrls: ['./home-logged.page.scss'],
})
export class HomeLoggedPage implements OnInit {
isLoggedIn;
  constructor(private route: Router,
    private accountService: AccountService) { this.isLoggedIn = localStorage.getItem("user"); }

  ngOnInit() {
  }

  travelPage() {
    this.route.navigate(['tabs/travelling']);
  } 

  drivePage() { 
    this.route.navigate(['tabs/driving']);
  }

  logout() { 
    this.accountService.logout();
    this.isLoggedIn = ""; 
    this.route.navigate(['tabs/home']);

    window.location.reload();
  }
}
