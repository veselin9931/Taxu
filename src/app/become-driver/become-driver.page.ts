import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { Location } from '@angular/common';
import { ImageService } from 'src/_services/image/image.service';
import { HttpEventType } from '@angular/common/http';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';
import { FileLikeObject, FileUploader } from 'ng2-file-upload';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-become-driver',
  templateUrl: './become-driver.page.html',
  styleUrls: ['./become-driver.page.scss'],
})
export class BecomeDriverPage implements OnInit {
  folderName = "driverFacePic";
  imgPath: string;
  imgType = "personalImg";
  pics: any;
  isDisabled: any;
  public progress: number;
  public message: string;
  public checker: boolean;

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;

  applicationUserId = this.accountService.userValue.id;

  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;
  constructor(private route: Router,
    private accountService: AccountService,
    private location: Location,
    private imageService: ImageService,
    private driverService: DriverService,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private translate: TranslateService) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);

     }

  ngOnInit() {
    this.getDocs();
    if (this.getDocs.length >= 4) {
      this.checker = true
    }

    this.checker = false;

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

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }


  getDocs() {
    this.imageService.getUserDocuments(this.applicationUserId)
      .subscribe(x => {
        console.log(x);
        this.pics = x;
        if(this.pics.length !== 4){
          this.isDisabled = true;
        }
      });
  }

  upload(files){
    
    if (files === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.imageService.upload(formData, this.folderName, this.applicationUserId, this.imgType)
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

   removePicture(id: string){
    this.picDelete(id);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.imageService.getUserDocuments(this.applicationUserId)
      .subscribe(x => {
        if (this.pics.length >= 4) {
          let data = { ApplicationUserId: this.applicationUserId };
          this.driverService.createDriver(data)
            .subscribe(() => {
              this.route.navigate(['menu/car-register']);
            })
        } else if (x.id == null) {
          
          this.notEnoughImages();
        }
        else {
          this.message = 'Please upload your documents!'
        }
      })
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async notEnoughImages() {
    this.translate.get(['You have to upload 4 document pictures.']).subscribe(async text => {
      const popup = await this.alertController.create({
        header: text['You have to upload 4 document pictures.'],
        buttons: [
          {
            text: 'Ok',
            role: 'Ok',
            
          }
        ]
      });
      await popup.present();
    })
    
  }

  async picDelete(id: string) {
    this.translate.get(['Delete the picture?', 'Yes', 'No']).subscribe(async text => {
      const popup = await this.alertController.create({
        header: text['Delete the picture?'],
        buttons: [
          {
            text: text['Yes'],
            handler: () => {
              this.imageService.removeDocument(id)
              .subscribe(x => {
                console.log('Image removed sucessfully')
              })
            }
          },
          {
            text: text['No'],
            role: 'no'
          }
        ]
      });
      await popup.present();
    })
  }
}


