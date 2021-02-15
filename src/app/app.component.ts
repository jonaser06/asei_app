import { Component } from '@angular/core';

import { IonicSafeString, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushNotificationsService } from './services/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pushService: PushNotificationsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("==DISPOSITIVO==");
      console.log(this.platform.is('desktop'));

      if(this.platform.is('android')) {
        this.pushService.init();
        this.statusBar.styleBlackOpaque();
        this.platform.backButton.subscribe(()=>{
          navigator['app'].exitApp();
        });
      }

    });
  }
}
