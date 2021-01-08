import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.page.html',
  styleUrls: ['./driver-register.page.scss'],
})
export class DriverRegisterPage implements OnInit {

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

  signIn(){
    this.route.navigate(['account/login/driver-login']);
  }

  goBack(){
    this.route.navigate(['account/register']);
  }
}
