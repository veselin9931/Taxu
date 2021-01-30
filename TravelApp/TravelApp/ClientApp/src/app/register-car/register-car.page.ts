import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/_services/driver/driver.service';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.page.html',
  styleUrls: ['./register-car.page.scss'],
})
export class RegisterCarPage implements OnInit {
  form: FormGroup;
  loading = false;
  isSubmitted = false;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      model: ['', Validators.required],
      tehnicalReview: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      color: ['', Validators.required],
      capacity: ['', Validators.required]
    })
  }

  get f() { return this.form.controls; }

  onSubmit(){
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
      
    } else {
      this.driverService.createCar(this.form.value)
      .subscribe(data => {
        this.clearForm();
        console.log(data);
        console.log('Successfully uploaded your car.')
        this.route.navigate(['tabs/verifying']);

      })
    }
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
