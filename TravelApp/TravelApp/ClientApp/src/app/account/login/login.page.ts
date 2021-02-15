import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'src/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted = false;
  form: FormGroup;
  loading = false;
  isLoggedIn;
  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private accountService: AccountService,
    private http: HttpClient) {
    this.isLoggedIn = localStorage.getItem("user");
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.clearForm();
          console.log(data);
          this.accountService.updateDriving(this.accountService.userValue.id, false)
            .subscribe(data => {
              console.log('success')
            });
          window.location.reload();
          this.route.navigate(['tabs/travelling']);

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  signUp() {
    this.route.navigate(['tabs/account/register']);
  }

  // ionViewDidLeave() {
  //   if (this.isLoggedIn == null) {
  //     window.location.reload();

  //   }
  // }

  clearForm() {
    this.form.reset({
      'username': '',
      'password': ''
    })
  }
}