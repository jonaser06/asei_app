import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../services/redireccion.service';

@Component({
  selector: 'app-inf-center',
  templateUrl: './infcenter.page.html',
  styleUrls: ['./infcenter.page.scss'],
})
export class InfCenterPage implements OnInit {

  constructor( private redireccionService : RedireccionService) { }

  ngOnInit() {
    
  }

  //redireccionamiento de secciones
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
