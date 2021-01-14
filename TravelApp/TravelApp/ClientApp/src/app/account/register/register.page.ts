import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isSubmitted = false;
  form: FormGroup;

  constructor(private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phone: ['']
    })
  }

  onSubmit(){
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.form.value)
      this.route.navigate(['tabs/account/login']);
    }

    this.clearForm();
  }

  signIn(){
    this.route.navigate(['tabs/account/login']);
  }

  goBack(){
    this.route.navigate(['tabs/home']);
  }

  clearForm(){
    this.form.reset({
      'email': '',
      'password' : ''
    })
  }
}
