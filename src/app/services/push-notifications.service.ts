import { Injectable, Output, EventEmitter } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {


  //notification bubble
  n_bubble = new EventEmitter();
  //not notification bubble
  nn_bubble = new EventEmitter();

  constructor(private http: HttpClient, private oneSignal: OneSignal, private alertCrtl: AlertController, private localNotification: LocalNotifications, public authService: AuthService, private navCtrol : NavController) { }

  init(){

    this.oneSignal.startInit('a8ee2c87-30d7-4925-b437-66f2f84deef1', '537577836460');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((resp) => {
      // do something when notification is received
      // let msg = resp.payload.body;
      // let title = resp.payload.title;
      // let additionalData = resp.payload.additionalData;

      console.log("Notificacion recibida ");
      console.log(resp.payload.additionalData);
      this.save_notification(resp.payload.additionalData);
      this.bubble();


    });

    this.oneSignal.handleNotificationOpened().subscribe((resp) => {
      console.log("Notificacion abierta ", resp);
      this.not_booble();
      this.navCtrol.navigateRoot('tabs/notifications', { animated : true } )
    });

    this.oneSignal.endInit();
    
  }

  bubble(){
    this.n_bubble.emit('{"notification":true}');
  }

  not_booble(){
    this.nn_bubble.emit('{"notification":false}'); 
  }

  save_notification(payload){
    console.log('guardando.')
    this.http.post(`${URL}/setNotification`, payload)
    .subscribe( resp => {
      console.log("respuesta del api");
      console.log(resp);
    });
  }

  get_notification(payload){
    return new Promise ( resolve => {
      this.http.post(`${URL}/getNotification`, payload)
      .subscribe( resp => {
        resolve(resp);
      });
    });
  }

  update_notification(){

  }

  delete_notification(){

  }

}
