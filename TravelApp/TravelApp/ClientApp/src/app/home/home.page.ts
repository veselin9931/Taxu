import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoggedIn;

  constructor(private route: Router,
    private accountService: AccountService) { this.isLoggedIn = localStorage.getItem("user"); }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("user");
  }

  loginPage(){
    this.route.navigate(['tabs/account/login']);
  }

  registerPage(){
    this.route.navigate(['tabs/account/register']);
  }

  goBack() {
    this.route.navigate(['tabs/home']);
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
