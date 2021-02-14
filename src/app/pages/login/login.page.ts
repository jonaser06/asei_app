import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService, private navCtrol : NavController, private uiserviceService: UiServiceService) { ;
  }

  ngOnInit() {
    /* sesion */
    this.authService.valida_user()
    .then(resp=>{
      if(resp) this.navCtrol.navigateRoot('tabs/infcenter', { animated : true } );
    })
    .catch()
  }

  
  async login( fLogin: NgForm ){

    if(fLogin.invalid) return;

    let valido = await this.authService.login_service(this.loginUser.email, this.loginUser.password)
    if(valido['status']){
      this.navCtrol.navigateRoot('tabs/infcenter', { animated : true } );
    }else{
      this.uiserviceService.alert_info(valido['data']['detalle']); 
    }

  }

}
