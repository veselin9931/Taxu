import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.page.html',
  styleUrls: ['./driver-login.page.scss'],
})
export class DriverLoginPage implements OnInit {
  
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
    this.route.navigate(['account/register/driver-register']);
  }

  goBack(){
    this.route.navigate(['account/login']);
  }
}
