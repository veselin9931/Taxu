import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { LanguagePopoverPage } from 'src/app/language-popover/language-popover.page';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitted = false;
  loading = false;
  form: FormGroup;
  err = '';

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private driverService: DriverService,
    private translate: TranslateService,
    private popoverController: PopoverController,
    private alertController: AlertController) { this.translate.setDefaultLang('en'); }



  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      referral: ['']

    }, {
      validators: this.ConfirmedValidator('password', 'confirmPassword')
    })



    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in register');
    }).catch(function (err) {
      return console.log(err.toString());
    });


  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (!this.form.valid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.driverService.getDriverByReferral(this.form.value.referral)
          // .subscribe(driver => {
          //   if(driver){
          //     this.driverService.lowerDriverCommission(driver.id)
          //     .subscribe(x => {
          //       console.log(x)
          //     })
          //   }else{
          //     console.log('The referral does not exists!')

          //   }
          // })
          this.presentAlert();
          this.route.navigate(['menu/home']);
          console.log(data)
        },
        error => {

          console.log(error.error);
          this.err = error.error;

          this.loading = false;
        }
      )
  }

  signIn() {
    this.route.navigate(['menu/home']);
  }

  goBack() {
    this.route.navigate(['menu/home']);
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Successfull registration',
      message: 'Log in and book a car.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
