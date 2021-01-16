import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  isLoggedIn;
  
  constructor() { this.isLoggedIn = localStorage.getItem("user"); }
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("user");
  }
}
