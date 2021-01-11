import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-register',
  templateUrl: './passenger-register.page.html',
  styleUrls: ['./passenger-register.page.scss'],
})
export class PassengerRegisterPage implements OnInit {
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

  signIn(){
    this.route.navigate(['account/login/passenger-login']);
  }

  goBack(){
    this.route.navigate(['account/register']);
  }

  clearForm(){
    this.form.reset({
      'email': '',
      'password' : ''
    })
  }
}