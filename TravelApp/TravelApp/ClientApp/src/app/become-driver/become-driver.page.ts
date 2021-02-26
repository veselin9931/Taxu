import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-become-driver',
  templateUrl: './become-driver.page.html',
  styleUrls: ['./become-driver.page.scss'],
})
export class BecomeDriverPage implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  applicationUserId = this.accountService.userValue.id;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private accountService: AccountService,
    private location: Location) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      driverLicense: ['', Validators.required],
      idCardNumber: ['', Validators.required],
      applicationUserId: [''],

    })
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.form.value.applicationUserId = this.applicationUserId;
      this.driverService.createDriver(this.form.value)
      .subscribe(data => {
        this.clearForm();
        console.log(data);
        console.log('Successfully uploaded your data.')
        this.route.navigate(['menu/car-register']);
      })
    }

  }

  clearForm() {
    this.form.reset({
      'driverLicense': '',
      'idCardNumber': ''
    })
  }
}
