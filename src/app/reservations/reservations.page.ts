import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

    constructor(private popoverController: PopoverController) { }
        
  ngOnInit() {
  }

    async openLanguagePopover(ev) {
        const popover = await this.popoverController.create({
            component: LanguagePopoverPage,
            event: ev
        });
        await popover.present();
    }

}
