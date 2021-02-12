import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { ReportService } from 'src/_services/report/report.service';
import { Location } from '@angular/common';
import { Driver, Order } from 'src/_models';
import { OrderService } from 'src/_services/order/order.service';
import { AlertController } from '@ionic/angular';

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
  userLastName: string;
  userFirstName: string;
  selectedReportType: number;
  suspectedUserId: string;
  reporterId: string;
  submitted = false;
  loading = false;
  isDriver: boolean;

  constructor(private reportService: ReportService,
    private route: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private accountService: AccountService,
    private location: Location,
    private orderService: OrderService,
    private alertController: AlertController) { this.userId = this.accountService.userValue.id; }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      reporterId: [''],
      suspectedUserId: [''],
      typeId: ['']
    })
  }

  get f() { return this.form.controls; }

  reportType(event) {
    this.selectedReportType = event;

    if (this.selectedReportType == 1) {
      this.accountService.getById(this.userId)
      .subscribe(u => {
        this.isDriver = u.isDriver;
        if(u.isDriver){
          this.orderService.getLastCompletedOrder(this.userId)
          .subscribe(x => {
            this.lastOrder = x;
            this.accountService.getById(x.applicationUserId)
              .subscribe(user => {
                this.userFirstName = user.firstName;
                this.userLastName = user.lastName;
              })
            
          });
        } else {
          this.orderService.getLastCompletedOrder(this.userId)
          .subscribe(x => {
            this.lastOrder = x;
            this.accountService.getById(x.acceptedBy)
              .subscribe(user => {
                this.userFirstName = user.firstName;
                this.userLastName = user.lastName;
                this.driverService.getDriverActiveCar(user.driverId)
                  .subscribe(car => {
                    this.carModel = car.model;
                    this.form.value.typeId = +this.form.value.typeId;
                    this.suspectedUserId = user.driverId;
                    this.reporterId = this.userId;
                  })
  
              })
          });
        }
      })

      
    }
  }

  onSubmit() {
    this.submitted = true;

    if (!this.form.valid) {
      console.log('Please provide all the required values!')
    } else {
      this.form.value.typeId = +this.form.value.typeId;
      if (this.form.value.typeId == 1) {
        this.form.value.suspectedUserId = this.suspectedUserId;
        this.form.value.reporterId = this.reporterId;

        this.reportService.createReport(this.form.value)
          .subscribe(report => {
            console.log("report created:");
            console.log(report)
            this.reportCompleted();
            this.clearForm();
          })
      } else {
        this.reportService.createReport(this.form.value)
          .subscribe(report => {
            console.log("report created:");
            console.log(report)
            this.reportCompleted();
            this.clearForm();
          })

      }

      console.log(this.form.value);
    }
  }

  async reportCompleted() {
    const popup = await this.alertController.create({
      header: 'Report',
      message: 'Your report is sent successfully',
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            if(this.isDriver == true){
              this.route.navigate(['tabs/driving']);

            } else {
              this.route.navigate(['tabs/travelling']);
            }
          }
        }
      ]
    });

    await popup.present();

  }

  clearForm() {
    this.form.reset({
      'title': '',
      'description': '',
      'typeId': '',
      'suspectedDriverId': '',
      'reporterId': '',
    })
  }

  goBack() {
    this.location.back();
  }
}
