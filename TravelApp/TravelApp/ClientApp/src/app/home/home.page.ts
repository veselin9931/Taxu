import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

  loginPage(){
    this.route.navigate(['tabs/account/login']);
  }

  registerPage(){
    this.route.navigate(['tabs/account/register']);
  }
}
