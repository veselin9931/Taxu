import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { interval } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';
import { Order } from 'src/_models';
import { AccountService, AlertService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  orderData: Order;
  isSubmitted = false;
  isCompleted = false;
  isAccepted = false;
  form: FormGroup;
  userId: string;
  constructor(private formBuilder: FormBuilder,
            private route: Router,
            private orderService: OrderService,
            private alertService: AlertService,
            private accountService: AccountService) { 
               this.userId = this.accountService.userValue.id;
            }

  ngOnInit() {
    this.checkorder();

    this.form = this.formBuilder.group({
      applicationUserId : [''],
      location: ['', Validators.required],
      destination: ['', Validators.required],
      increasePrice: [0]
    }) 
    
    const connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl('https://localhost:44329/orderHub', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
    .build();

    connection.start().then(function() {
      console.log('signalR Connected');
    }).catch(function(err){
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.checkorder();
    });

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

  checkorder(){
    this.orderService.getMyOrder(this.userId)
    .subscribe(data => {
      console.log(`Travelling page data`)

      console.log(data)
      this.isAccepted = data.isAccepted;

      if(this.isAccepted == true){
        this.isCompleted = false;
        this.isSubmitted = false;
        this.clearForm();
        console.log('your order is accepted')
        this.orderData = this.orderService.order;
        this.route.navigate(['tabs/waiting-driver'])
      }
    })
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
