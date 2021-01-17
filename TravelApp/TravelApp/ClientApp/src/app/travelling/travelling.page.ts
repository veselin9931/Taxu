import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  isSubmitted = false;
  isCompleted = false;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
            private route: Router,
            private orderService: OrderService,
            private alertService: AlertService,
            private accountService: AccountService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      applicationUserId : [''],
      location: ['', Validators.required],
      destination: ['', Validators.required],
      increasePrice: [0]
    })
  }

  get f() { return this.form.controls; }

  onSubmit(){
    this.form.value.increasePrice = (+this.form.value.increasePrice);
    let userId = this.accountService.userValue.id;
    this.form.value.applicationUserId = userId;

    this.isSubmitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      this.orderService.createOrder(this.form.value)
      .subscribe(() => {
        this.alertService.success('You have created an order.', { autoClose: true });
        this.isCompleted = true;
      })
    }
  }

  cancelOrder(){
    this.isCompleted = false;
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
