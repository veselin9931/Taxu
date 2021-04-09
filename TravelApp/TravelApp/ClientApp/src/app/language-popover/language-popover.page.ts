import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/_services';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {
  selected = "";
  languages = [
    { text: 'English', value: 'en', img: '../../assets/english.png' },
    { text: 'Spanish', value: 'es', img: '../../assets/spain.png' }
  ];

  constructor(private popoverController: PopoverController,
    private translate: TranslateService,
    private accountService: AccountService) { }

  ngOnInit() {
  }

  select(lng) {
    this.translate.use(lng);
    this.selected = lng;
    if (this.accountService.userValue) {
      this.accountService.userValue.choosenLanguage = lng;
      this.accountService.updateLanguage(this.accountService.userValue.id, lng)
        .subscribe(() => {
        });
    }

    this.popoverController.dismiss();
  }
}
