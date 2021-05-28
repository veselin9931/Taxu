import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '_services';
import * as signalR from '@aspnet/signalr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  loading = false;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR connected');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.onSubmit();
    });
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
          this.route.navigate(['dashboard']);

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  signUp() {
    this.route.navigate(['dashboard']);
  }




  ionViewDidLeave() {
      window.location.reload();
  }

  clearForm() {
    this.form.reset({
      'username': '',
      'password': ''
    })
  }
}
