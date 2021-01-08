import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-login',
  templateUrl: './passenger-login.page.html',
  styleUrls: ['./passenger-login.page.scss'],
})
export class PassengerLoginPage implements OnInit {

  loginPayload: FormGroup;
  constructor(private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginPayload = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  driverLogin(){
    console.log(this.loginPayload.value);
  }

  signUp(){
    this.route.navigate(['account/register/passenger-register']);
  }

  goBack(){
    this.route.navigate(['account/login']);
  }
}