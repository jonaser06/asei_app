import { Component } from '@angular/core';

import { IonicSafeString, Platform, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushNotificationsService } from './services/push-notifications.service';
import { RedireccionService } from './services/redireccion.service';
import { CalificationService } from './services/calification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private calificationService : CalificationService,
    private  navCtrol: NavController,
    private alertController : AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pushService: PushNotificationsService,
    private redireccionService: RedireccionService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      /* console.log("==DISPOSITIVO==");
      console.log(this.platform.is('desktop')); */

      if(this.platform.is('android')) {
        this.pushService.init();
        this.statusBar.styleBlackOpaque();
        this.platform.backButton.subscribe(()=>{
          let path = window.location.href;
          let path2 = path.split('/');
          console.log(path2.length);
          if(path2.length < 6 ){
            console.log('salir');
            navigator['app'].exitApp();
          }else{
            this.redireccionService.backpage();
          }
        });
      }

    });
  }

  closemodal(){
    (document.querySelector('.calificacion_user') as HTMLElement).textContent = "1";
    (document.querySelector('.overlay-10') as HTMLElement).style.display = "none";
    this.renderStart(1)

  }
  mouser($event){
    const {id} = $event.target.dataset ;
      this.renderStart(parseInt(id));
      (document.querySelector('.calificacion_user') as HTMLElement).textContent = `${id}`;
  }
  renderStart (limit) {
    console.log(limit)
    const parent = (document.querySelector('.container-stars') as HTMLElement);
    const items  : HTMLCollection = parent.children
    for (let index = 0; index < items.length; index++) {
      items[index].classList.remove('star');
      items[index].classList.add('star-outline');
    }
    for (let index = 0; index < parent.children.length; index++) {
      items[index].classList.remove('star-outline');
      items[index].classList.add('star');
      console.log(items[index])
      let count = index +1 ;
      if( count  == limit){
            break;
          }
    }
    
  }
  calificar () {
    this.closemodal()
    const select = (document.querySelector('.calificacion_user') as HTMLElement).textContent ;
    const formData = new FormData()
            formData.append('calificacion',select);
            this.calificationService.calificar(this.calificationService.ID_NO , this.calificationService.ID_US ,formData).then( resp => {
                if( resp['status']) {
                  
                    this.modalResponse( 'Gracias por tu calificación')
                    setTimeout(() => window.location.reload(), 1500);
                }
            })
  }
  async modalResponse( message : string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message,
    });

    await alert.present();
  }
}
