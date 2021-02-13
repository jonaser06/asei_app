import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {

  constructor(private oneSignal: OneSignal) { }

  init(){

    this.oneSignal.startInit('a8ee2c87-30d7-4925-b437-66f2f84deef1', '537577836460');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((resp) => {
    // do something when notification is received
      console.log("Notificacion recibida ", resp);
    });

    this.oneSignal.handleNotificationOpened().subscribe((resp) => {
      // do something when a notification is opened
      console.log("Notificacion abierta ", resp);
    });

    this.oneSignal.endInit();
    
  }
}
