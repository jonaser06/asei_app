import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  nombres : any;
  menues : any;
  rol : any;
  constructor(public authService: AuthService, private navCtrol : NavController) {
    this.current_session();
  }

  ngOnInit() {
  }

  current_session(){
    this.authService.get_data()
    .then(resp=>{
      this.nombres = resp['data']['nombres']; 
      this.rol = resp['data']['rol'] 
      this.menues = resp['data']['permisos'];
      console.log(this.menues);
    });
  }
  setCurrentActive(path: string){
    this.navCtrol.navigateRoot(`/tabs/${path}`);
  }
  goProfile(){
    // this.navCtrol.navigateRoot("/")
  }
  goNotifications() {
    // this.navCtrol.navigateRoot("/")
  }
  logout (){
    if(this.authService.logout()){
      if(AuthService){
        this.navCtrol.navigateRoot("/login")
        }
      }  
  }

}
