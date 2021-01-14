import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-verifying',
  templateUrl: './account-verifying.page.html',
  styleUrls: ['./account-verifying.page.scss'],
})
export class AccountVerifyingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  goBack(){
    this.route.navigate(['tabs/home-logged']);
  }
}
