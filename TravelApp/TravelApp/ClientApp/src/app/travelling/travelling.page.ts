import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  isSubmitted = false;
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
            private route: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      location: [''],
      destination: [''],
      increaseAmount: ['']
    })
  }



  onSubmit(){
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.form.value)
    }
    this.clearForm();
  }

  cancelOrder(){
    this.isSubmitted = false;

    console.log('Canceled order');

    this.clearForm();
  }

  goBack(){
    this.route.navigate(['tabs/home']);
  }

  clearForm(){
    this.form.reset({
      'location': '',
      'destination' : '',
      'increaseAmount': ''
    })
  }

}
