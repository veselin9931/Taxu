import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-out-of-town',
  templateUrl: './out-of-town.page.html',
  styleUrls: ['./out-of-town.page.scss'],
})
export class OutOfTownPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  
  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travelling');
    }).catch(function (err) {
      return console.log(err);
    });

    //Make backend logic for this signalr methods
    // connection.on('CreatedOrder', () => {
      
    // });
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

}
