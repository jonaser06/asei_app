import { ApplicationRef, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  nombres : any;
  menues : any;
  rol : any;
  bubble : false;


  constructor(public authService: AuthService, private navCtrol : NavController, public pushNotification: PushNotificationsService, private applicationRef: ApplicationRef) {
    this.current_session();
  }

  ngOnInit() {
    this.pushNotification.n_bubble.subscribe( n => {
      n = JSON.parse(n);
      this.bubble = n.notification;
      this.applicationRef.tick();
      console.log(this.bubble)
    });

    this.pushNotification.nn_bubble.subscribe( n => {
      n = JSON.parse(n);
      this.bubble = n.notification;
      this.applicationRef.tick();
      console.log(this.bubble)
    });
  }

  current_session(){
    this.authService.get_data()
    .then(resp=>{
      // console.log(resp);
      this.nombres = resp['data']['nombres']; 
      this.rol = resp['data']['rol'] 
      this.menues = resp['data']['permisos'];
      // console.log(this.menues);
    });
  }
  setCurrentActive(path: string){
    // console.log (path);
    // return;
    this.navCtrol.navigateRoot(`/tabs/${path}`);
  }
  goProfile(){
    // this.navCtrol.navigateRoot("/")
  }
  goNotifications() {
    this.navCtrol.navigateRoot('tabs/notifications', { animated : true } );
  }
  logout (){
    if(this.authService.logout()){
      if(AuthService){
        this.navCtrol.navigateRoot("/login")
        }
      }  
  }

}
