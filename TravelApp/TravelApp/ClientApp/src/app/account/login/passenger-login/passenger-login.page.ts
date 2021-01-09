import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-login',
  templateUrl: './passenger-login.page.html',
  styleUrls: ['./passenger-login.page.scss'],
})
export class PassengerLoginPage implements OnInit {
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

  onSubmit(){
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.form.value)
    }
    this.clearForm();
  }

  signUp(){
    this.route.navigate(['account/register/passenger-register']);
  }

  goBack(){
    this.route.navigate(['account/login']);
  }

  clearForm(){
    this.form.reset({
      'email': '',
      'password' : ''
    })
  }
}