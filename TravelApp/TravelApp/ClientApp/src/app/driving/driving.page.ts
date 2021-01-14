import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  verifiedAccount = true;
  isSubmitted = false;
  form: FormGroup;
  loading = false;

  constructor(private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [''],
    })
  
  }

  goBack(){
    this.route.navigate(['tabs/home-logged']);
  }

  onSubmit(){
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log('Successfully uploaded your data.')
      this.route.navigate(['tabs/verifying']);
    }

    this.clearForm();
  }

  uploadLicense(){
    console.log('Uploaded drivers license!')
  }

  uploadCarTicket(){
    console.log('Uploaded car ticket!')
  }

  uploadCarPic(){
    console.log('Uploaded car picture!')
  }

  clearForm(){
    this.form.reset({
      'firstName': ''
    })
  }

}
