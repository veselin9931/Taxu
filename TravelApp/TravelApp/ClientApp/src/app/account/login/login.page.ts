import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
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
          this.route.navigate(['tabs/home']);

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  signUp() {
    this.route.navigate(['tabs/account/register']);
  }


  goBack() {
    this.route.navigate(['tabs/home']);
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