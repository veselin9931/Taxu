import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService } from '_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.accountService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.loading = false;
          this.route.navigateByUrl('home')
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  signUp() {
    this.route.navigate(['dashboard']);
  }


  clearForm() {
    this.loginForm.reset({
      'username': '',
      'password': ''
    })
  }
}
