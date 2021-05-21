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
  
  initdesktop(){
    let Osignal = window['OneSignal'] || [];
    var ref = this;

    Osignal.push(function() {
      Osignal.init({
        appId: "a8ee2c87-30d7-4925-b437-66f2f84deef1",
      });

      Osignal.on('notificationDisplay', function(event) {
        console.warn('OneSignal notification displayed:', event);
        ref.bubble();

        (document.querySelector('.title_noti') as HTMLElement).innerHTML='';
        (document.querySelector('.desc_noti') as HTMLElement).innerHTML='';
        (document.querySelector('.desc_noti_') as HTMLElement).innerHTML='';
        
        let title = event.data.categoria;
        let desc = (event.data.descripcion).split(':')[0]+' :'; 
        let desc_ = (event.data.descripcion).split(':')[1];
        (document.querySelector('.notificacionevent') as HTMLElement).style.visibility = 'visible';
        (document.querySelector('.title_noti') as HTMLElement).append(title);
        (document.querySelector('.desc_noti') as HTMLElement).append(desc);
        (document.querySelector('.desc_noti_') as HTMLElement).append(desc_);

        localStorage.setItem('destino',event.data.destino);
        
      });

      Osignal.push(["addListenerForNotificationOpened", function(data) {
        alert("Received NotificationOpened:");
        console.log(data);
    }]);
      
    })

  }

  bubble(){
    this.n_bubble.emit('{"notification":true}');
  }

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
