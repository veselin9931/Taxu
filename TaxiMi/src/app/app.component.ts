import { Component } from '@angular/core';
import { Capacitor, Plugins, StatusBarStyle } from '@capacitor/core';
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
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('StatusBar')) { 
        StatusBar.setStyle({ style: StatusBarStyle.Light });
      };
      SplashScreen.hide();
      this.translate.setDefaultLang('en');

    });
  }
}

