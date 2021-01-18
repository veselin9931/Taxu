import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { interval, Subject } from 'rxjs';
import { concatMap, startWith } from 'rxjs/operators';
import { Order } from 'src/_models';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  private readonly getOrdersAction$ = new Subject();

  verifiedAccount = true;
  isSubmitted = false;
  form: FormGroup;
  loading = false;
  //orders: Order[] = [];
  hours: [];

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private orderService: OrderService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      firstName: [''],
    })

  }

  orders$ = interval(300).pipe(
    startWith(''),
    concatMap(() => {
      return this.orderService.getAllOrders(); // this will be your http get request
    }),
  )

  goBack() {
    this.route.navigate(['tabs/home']);
  }

  // loadData(event) {
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();

  //     this.orderService.getAllOrders().subscribe(
  //       orders => {
  //         this.orders = orders;
  //       }
  //     )

  //     // App logic to determine if all data is loaded
  //     // and disable the infinite scroll
  //     if (this.orders.length == 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  onSubmit() {
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


  uploadLicense() {
    console.log('Uploaded drivers license!')
  }

  uploadCarTicket() {
    console.log('Uploaded car ticket!')
  }

  uploadCarPic() {
    console.log('Uploaded car picture!')
  }

  clearForm() {
    this.form.reset({
      'firstName': ''
    })
  }

}
