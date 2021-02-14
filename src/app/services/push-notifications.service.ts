import { Injectable, Output, EventEmitter } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {


  //notification bubble
  n_bubble = new EventEmitter();
  //not notification bubble
  nn_bubble = new EventEmitter();

  constructor(private oneSignal: OneSignal, private alertCrtl: AlertController, private localNotification: LocalNotifications, public authService: AuthService) { }

  init(){

    this.oneSignal.startInit('a8ee2c87-30d7-4925-b437-66f2f84deef1', '537577836460');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((resp) => {
    // do something when notification is received
      // let msg = resp.payload.body;
      // let title = resp.payload.title;
      // let additionalData = resp.payload.additionalData;
      // this.showAlert( title, msg, additionalData.task );
      // this.showLocalNotification();
      console.log("Notificacion recibida ");
      this.bubble();

    });

    this.oneSignal.handleNotificationOpened().subscribe((resp) => {
      // do something when a notification is opened
      // let additionalData = resp.notification.payload.additionalData;
      // this.showAlert( 'Notificacion abierta', 'You already read this before', additionalData.task );
      console.log("Notificacion abierta ", resp);
      this.not_booble();
    });

    this.oneSignal.endInit();
    
  }

  bubble(){
    this.n_bubble.emit('{"notification":true}');
  }

  not_booble(){
    this.nn_bubble.emit('{"notification":false}');
  }

  showLocalNotification(){
    this.localNotification.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: 'file://sound.mp3',
      data: { secret: 'test' }
    });
  }

  async showAlert(title, msg, task){

    const alert = await this.alertCrtl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () =>{

          }
        }
      ]
    });
    
    alert.present()
  }

}
