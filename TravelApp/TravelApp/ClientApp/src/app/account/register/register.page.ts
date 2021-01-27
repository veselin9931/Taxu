import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'src/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitted = false;
  loading = false;
  form: FormGroup;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService) { }

    

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required]
    },{
      validators: this.ConfirmedValidator('password', 'confirmPassword')
    })
  }

  get f() { return this.form.controls; }

  onSubmit(){
    this.submitted = true;

    if (!this.form.valid) {
      return;
    } 
    

    this.loading = true;

    this.accountService.register(this.form.value)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Successful registration', { keepAfterRouteChange: true });
        this.route.navigate(['tabs/home']);
        console.log(data)
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  }

  signIn(){
    this.route.navigate(['tabs/home']);
  }

  goBack(){
    this.route.navigate(['tabs/home']);
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
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
}
