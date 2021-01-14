import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-logged',
  templateUrl: './home-logged.page.html',
  styleUrls: ['./home-logged.page.scss'],
})
export class HomeLoggedPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.route.navigate(['tabs/home']);
  }

  travelPage(){
    this.route.navigate(['tabs/travelling']);
  }

  drivePage(){
    this.route.navigate(['tabs/driving']);
  } 
}
