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
    console.log('0. ngOnInit');
  }

  ionViewDidEnter(){
    console.log('1. ionViewDidEnter');
  }
  ionViewDidLoad(){
    console.log('2. ionViewDidLoad');
  }
  ionViewWillEnter(){
    console.log('3. ionViewWillEnter');
  }
  ionViewWillLeave(){
    console.log('4. ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('5. ionViewDidLeave');
  }
  ionViewWillUnload(){
    console.log('6. ionViewWillUnload');
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
