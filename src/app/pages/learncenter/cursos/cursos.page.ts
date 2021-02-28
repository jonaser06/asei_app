import { Component, OnInit } from '@angular/core';

import {IonSlides}  from '@ionic/angular';
import { LearncenterService } from 'src/app/services/learncenter.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';

import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  URL = environment.url;
  pages : any;
  CursosData:any;
  currentpage : any;
  currentkey : any;
  search : any;
  visible: any;
  
  constructor(private redireccionService: RedireccionService, private learncenterService: LearncenterService, private uiServiceService: UiServiceService) { 
    this.getcursos();
    this.visible = false;
  }

  ngOnInit() {
  }

  getcursos(){
    let pages = [];
    this.learncenterService.get_learncenterCursos()
    .then(resp=>{
      console.log();
      this.CursosData = resp['data'];
      for(let i = 1 ; i <= this.CursosData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.CursosData.page;
      

    })
    .catch();
  }
  onSearchChange(event){
    let input = event.detail.value;
    this.search = input;
    let pages = [];
    this.learncenterService.get_learncenterCursos(1,input) 
    .then(resp=>{
      this.CursosData = resp['data'];
      for(let i = 1 ; i <= this.CursosData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.CursosData.page;
    });
  }

 

  openCursos_(ID_CO){
    this.redireccionService.redireccion('/tabs/learning-center/cursos/info/'+ID_CO);
  }

  volverLearn(){
    this.redireccionService.backpage();
  } 

}
