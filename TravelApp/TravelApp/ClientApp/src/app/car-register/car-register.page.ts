import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.page.html',
  styleUrls: ['./car-register.page.scss'],
})
export class CarRegisterPage implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;

  userId: string;
  driverId: string;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private accountService: AccountService,
    private location: Location) { this.userId = this.accountService.userValue.id; }

  ngOnInit() {
    this.form = this.formBuilder.group({
      model: ['', Validators.required],
      tehnicalReview: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      color: ['', Validators.required],
      capacity: ['', Validators.required],
      driverId: [''],
      type: [''],
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (!this.form.valid) {
      console.log('Please provide all the required values!')
    } else {
      this.accountService.getById(this.userId)
        .subscribe(x => {
          this.form.value.driverId = x.driverId;
          this.form.value.type = +this.form.value.type;

          this.driverService.createCar(this.form.value)
            .subscribe(data => {
              this.clearForm();
              console.log(data)
              console.log('Successfully uploaded your car.')
              this.driverService.getDriverCars(x.driverId)
                .subscribe(d => {
                  // if(d.length == 1){
                  //   this.driverService.activeCar(data, this.driverId)
                  //   .subscribe(a => {
                  //     console.log('Will be active after approval')
                  //   })
                  // }
                  
                  if (d.length != 0) {
                    this.route.navigateByUrl('tabs/driver-profile');
                  } else {
                    
                    this.route.navigateByUrl('tabs/verifying');
                  }
                })
            })
        });


    }
  }

  goBack() {
    this.location.back();
  }

  clearForm() {
    this.form.reset({
      'model': '',
      'tehnicalReview': '',
      'registrationNumber': '',
      'color': '',
      'capacity': '',
    })
  }
}