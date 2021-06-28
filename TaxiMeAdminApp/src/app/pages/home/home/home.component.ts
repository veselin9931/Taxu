import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'environments/environment';
import { AccountService } from '_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn;
  isAdmin;
  constructor(private account: AccountService) {
    this.isLoggedIn = localStorage.getItem("user");
  }
  ngOnInit() {
    this.checkValues();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR connected');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    // connection.on('BroadcastMessage', () => {
    //   this.checkValues();
    // });

    // connection.on('LoggedIn', () => {
    //   this.checkValues();
    // });
  }

  checkValues() {
    // console.log(this.account.userValue)
    this.isLoggedIn = localStorage.getItem("user");

    if (this.isLoggedIn) {
      this.isLoggedIn = localStorage.getItem("user");
      this.isAdmin = this.account.userValue.isAdmin;
      this.account.trigger().subscribe(() => { console.log('triggered')});
    } else {
      this.isAdmin = false;
      this.isLoggedIn = false;
    }
  }
}
