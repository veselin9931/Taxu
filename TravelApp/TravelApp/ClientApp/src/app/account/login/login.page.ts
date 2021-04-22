import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { LanguagePopoverPage } from 'src/app/language-popover/language-popover.page';
import { environment } from 'src/environments/environment';
import { AccountService, AlertService } from 'src/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    submitted = false;
    err = '';
  form: FormGroup;
  loading = false;
  isLoggedIn;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private accountService: AccountService,
    private http: HttpClient,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.isLoggedIn = localStorage.getItem("user");
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    if(this.isLoggedIn){
      this.route.navigate(['menu/travelling'])
    }

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in login');
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
          this.accountService.updateDriving(this.accountService.userValue.id, false)
            .subscribe(data => {
              console.log('success')
            });
          this.route.navigate(['menu/travelling']);
        },
          error => {
              console.log(error.error.message);
              this.err = error.error.message
          this.loading = false;
        });

  }

  signUp() {
    this.route.navigate(['menu/account/register']);
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }



  clearForm() {
    this.form.reset({
      'username': '',
      'password': ''
    })
  }
}