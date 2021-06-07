import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';
import { ImageService } from 'src/_services/image/image.service';
import { HttpEventType } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.page.html',
  styleUrls: ['./car-register.page.scss'],
})
export class CarRegisterPage implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;
  pics: any;
  userId: string;
  driverId: string;

  folderName = "driverFacePic";
  imgPath: string;
  imgType = "carImg";
  public progress: number;
  public message: string;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private accountService: AccountService,
    private location: Location,
    private imageService: ImageService,
    private alertController: AlertController) { this.userId = this.accountService.userValue.id; }

  ngOnInit() {
    this.getDocs();
    this.form = this.formBuilder.group({
      model: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      color: ['', Validators.required],
      capacity: ['', Validators.required],
      driverId: [''],
      type: [''],
    })

    const connection = new signalR.HubConnectionBuilder()
       .configureLogging(signalR.LogLevel.Information)
       .withUrl(`${environment.signalRUrl}/orderHub`)
       .build();

     connection.start().then(function () {
       console.log('signalR Connected in menu');
     }).catch(function (err) {
      console.log("Reconnecting in 1 sec.");
      setTimeout(() => connection.start(), 1000);
     });

     connection.on('OnUpload', (userId: string) => {
      this.getDocs();
    });
  }

  get f() { return this.form.controls; }

  getDocs() {
    this.imageService.getUserCarPictures(this.userId)
      .subscribe(x => {
        this.pics = x;
        console.log(this.pics)
      })
  }

  removePicture(id: string){
    this.picDelete(id);
   
  }

  onSubmit() {
    this.submitted = true;

    if (!this.form.valid) {
      return;
    } 
    
    if(this.pics.length != 4){
      this.notEnoughImages();
    } else {
      this.accountService.getById(this.userId)
        .subscribe(x => {
          this.form.value.driverId = x.driverId;
          this.form.value.type = +this.form.value.type;

          this.driverService.createCar(this.form.value)
            .subscribe(data => {
              this.clearForm();
              this.driverService.getDriverCars(x.driverId)
                .subscribe(d => {

                  if (d.length != 0) {
                    this.route.navigateByUrl('menu/driver-profile');
                  } else {
                    this.imageService.getUserCarPictures(this.userId)
                      .subscribe(x => {
                        if (x[2].path) {
                          this.route.navigateByUrl('menu/verifying');
                        }
                      })

                  }
                })
            })
        });


    }
  }

  upload(files) {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.imageService.upload(formData, this.folderName, this.userId, this.imgType)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Documents uploaded successfully.';
        }
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            break;
          case HttpEventType.Response:
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
        }
      })
  }

  goBack() {
    this.location.back();
  }

  async notEnoughImages() {
    const popup = await this.alertController.create({
      header: 'You have to upload 4 car and car document pictures.',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          
        }
      ]
    });
    await popup.present();
  }

  async picDelete(id: string) {
    const popup = await this.alertController.create({
      header: 'Delete the picture?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.imageService.removeDocument(id)
            .subscribe(x => {
              console.log('Image removed sucessfully')
            })
          }
        },
        {
          text: 'No',
          role: 'no'
        }
      ]
    });
    await popup.present();
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