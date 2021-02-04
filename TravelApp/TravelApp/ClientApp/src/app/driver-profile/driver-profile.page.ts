import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { Location } from '@angular/common';
import { DriverService } from 'src/_services/driver/driver.service';
import { Car } from 'src/_models/car';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.page.html',
  styleUrls: ['./driver-profile.page.scss'],
})
export class DriverProfilePage implements OnInit {
  user = this.accountService.userValue;
  driverId: string;
  driverCars: Car[];
  isActiveCar: boolean;

  constructor(private accountService: AccountService,
    private driverService: DriverService,
    private route: Router,
    private location: Location,
    private alertController: AlertController) { }
  
  ngOnInit() {
    this.getCars();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:44329/orderHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in profile');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getCars();
    });
    
    
  }

  getCars(){
    this.accountService.getById(this.user.id)
    .subscribe(x => {
      this.driverService.getDriverCars(x.driverId)
      .subscribe(d => {
        if(d == null){
          console.log('No cars');
          return;
        }
        
        this.driverCars = d;
        console.log(this.driverCars)
      })
    })
  }

  openHistory(){
    this.route.navigate(['tabs/driver-history']);
  }

  addNewCar(){
    this.route.navigate(['tabs/register-car'])
  }

  active(car: Car){
    if(car.isActive){
      return;
    }
    
    if(car.confirmation == false){
      this.presentAlert();
      return;
    }

    this.driverService.activeCar(car, car.driverId)
    .subscribe(x => {
     
      this.isActiveCar = x.isActive;
      console.log(x);
    })
  }

  deleteCar(id: string){
    this.driverService.deleteCar(id)
    .subscribe(x => {
      console.log(x);
    })
  }

  goBack(){
    this.location.back();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Your car is not confirmet yet.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
