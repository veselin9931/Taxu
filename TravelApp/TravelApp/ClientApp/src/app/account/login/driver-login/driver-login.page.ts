import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.page.html',
  styleUrls: ['./driver-login.page.scss'],
})
export class DriverLoginPage implements OnInit {
  isSubmitted = false;
  form: FormGroup;

  constructor(private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
   this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.form.value)
    }

    this.clearForm();
  }

  signUp() {
    this.route.navigate(['account/register/driver-register']);
  }

  get errorControl() {
    return this.form.controls;
  }

  goBack() {
    this.route.navigate(['account/login']);
  }

  clearForm(){
    this.form.reset({
      'email': '',
      'password' : ''
    })
  }
}
