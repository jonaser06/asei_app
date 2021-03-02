import { ApplicationRef, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  user_id : any;
  nombres : any;
  menues : any;
  rol : any;
  bubble : false;

  userdata: any;
  URL = environment.url;
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
    .then((resp : any)=>{
      // console.log(resp);
      this.nombres = resp['data']['nombres']; 
      this.rol = resp['data']['rol'] 
      this.menues = resp['data']['permisos'];
      this.user_id = resp['data']['user_id'];
      
      let nombres = resp.data.nombres + ' ' + resp.data.apellidos;
      let img = this.URL + '/' + resp.data.imagenes[0].RUTA;
      this.userdata = {
        nombre: nombres,
        cargo: resp.data.cargo,
        correo: resp.data.email,
        fecha: resp.data.fecha_ingreso,
        telefono: resp.data.telefono,
        direccion: resp.data.direccion,
        image: img
      }
    });
  }
  setCurrentActive(path: string){
    console.log (path);
    // return;
    this.navCtrol.navigateRoot(`/tabs/${path}`);
  }
  goProfile(){
    this.navCtrol.navigateRoot('tabs/perfil', { animated : true } );
  }
  goNotifications() {
    this.navCtrol.navigateRoot('tabs/notifications', { animated : true } );
  }
  goConfig(){
    this.navCtrol.navigateRoot('tabs/usuarios/colaborador', { animated : true } );
  }
  logout (){
    if(this.authService.logout()){
      if(AuthService){
        this.navCtrol.navigateRoot("/login")
        }
      }  
  }

}
