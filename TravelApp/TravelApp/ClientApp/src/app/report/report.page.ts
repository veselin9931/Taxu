import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { ReportService } from 'src/_services/report/report.service';
import { Location } from '@angular/common';
import { Driver, Order } from 'src/_models';
import { OrderService } from 'src/_services/order/order.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  driver: Driver;
  userId: string;
  form: FormGroup;
  carModel: string;
  lastOrder: Order;
  driverId: string;
  driverLastName: string;
  driverFirstName: string;
  selectedReportType: number;
  suspectedDriverId: string;
  reporterId: string;
  submitted = false;
  loading = false;

  constructor(private reportService: ReportService,
    private route: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private accountService: AccountService,
    private location: Location,
    private orderService: OrderService) { this.userId = this.accountService.userValue.id; }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      reporterId: [''],
      suspectedDriverId: [''],
      typeId: ['']
    })
  }

  get f() { return this.form.controls; }

  reportType(event) {
    this.selectedReportType = event;

    if (this.selectedReportType == 1) {
      this.orderService.getLastCompletedOrder(this.userId)
        .subscribe(x => {
          this.lastOrder = x;
          this.accountService.getById(x.acceptedBy)
            .subscribe(user => {
              this.driverFirstName = user.firstName;
              this.driverLastName = user.lastName;
              this.driverService.getDriverActiveCar(user.driverId)
                .subscribe(car => {
                  this.carModel = car.model;
                  this.form.value.typeId = +this.form.value.typeId;
                  this.suspectedDriverId = x.acceptedBy;
                  this.reporterId = this.userId;
                })
            })
        });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (!this.form.valid) {
      console.log('Please provide all the required values!')
    } else {
      this.form.value.typeId = +this.form.value.typeId;
      if (this.form.value.typeId == 1) {
        this.form.value.suspectedDriverId = this.suspectedDriverId;
        this.form.value.reporterId = this.reporterId;

        this.reportService.createReport(this.form.value)
        .subscribe(report =>{
          console.log("report created:");
          console.log(report)
        })
      }else{
        this.reportService.createReport(this.form.value)
        .subscribe(report =>{
          console.log("report created:");
          console.log(report)
        })
      }

      console.log(this.form.value);
    }
  }

  goBack() {
    this.location.back();
  }
}
