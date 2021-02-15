import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  nombres : any;
  constructor(public authService: AuthService, private navCtrol : NavController) { 
    this.current_session();
  }

  ngOnInit(){

  }
  

  current_session(){
    this.authService.get_data()
    .then(resp=>{
      this.nombres = resp['data']['nombres'];
    });
  }

  goProfile(){
    this.navCtrol.navigateRoot("/");
  }
  goNotifications() {
    this.navCtrol.navigateRoot("/")
  }
  logout (){
    if(this.authService.logout()){
      this.navCtrol.navigateRoot("/login", { animated : true } );
    }
  }
}
