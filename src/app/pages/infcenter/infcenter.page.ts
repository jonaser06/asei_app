import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RedireccionService } from '../../services/redireccion.service';

@Component({
  selector: 'app-inf-center',
  templateUrl: './infcenter.page.html',
  styleUrls: ['./infcenter.page.scss'],
})
export class InfCenterPage implements OnInit {

  constructor( private redireccionService : RedireccionService, private authService: AuthService) { 
    // this.redirect_login();
    this.authService.valida_user().then((r)=>{
      if(!r) this.redirect_login();
    })
  }

  ngOnInit() {
    
  }

  redirect_login(){
    this.redireccionService.redireccion('/login');
  }
  noticias(){
    this.redireccionService.redireccion('/tabs/infcenter/news')
  }

  aniversario(){
    this.redireccionService.redireccion('/tabs/infcenter/anniversary')
  }

  ferias(){
    this.redireccionService.redireccion('/tabs/infcenter/fairs')
  }
  
  eventos(){
    this.redireccionService.redireccion('/tabs/infcenter/eventos')
  }

  

  calendario(){
    
  }
}
