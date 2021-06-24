import { Component } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private translate: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    this.platform.ready().then(async () => {
      await StatusBar.setStyle({ style: StatusBarStyle.Light });
      setTimeout(() => {
        SplashScreen.hide({
          fadeOutDuration: 5000
        });
      }, 2000)
      this.translate.setDefaultLang('en');

    });
  }
}

