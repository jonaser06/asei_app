import { Component, OnInit } from '@angular/core';
import { LearncenterService } from 'src/app/services/learncenter.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';

import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.page.html',
  styleUrls: ['./webinars.page.scss'],
})
export class WebinarsPage implements OnInit {

  URL = environment.url;
  pages : any;
  CursosData:any;
  currentpage : any;
  currentkey : any;
  search : any;
  visible: any;

  constructor(private redireccionService: RedireccionService, private learncenterService: LearncenterService, private uiServiceService: UiServiceService) { 
    this.getwebinnars();
    this.visible = false;
  }

  ngOnInit() {
  }

  getwebinnars(){
    let pages = [];
    this.learncenterService.get_webinnars()
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
    this.learncenterService.get_webinnars(1,input) 
    .then(resp=>{
      this.CursosData = resp['data'];
      for(let i = 1 ; i <= this.CursosData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.CursosData.page;
    });
  }

  openCursos_(ID_CO){
    this.redireccionService.redireccion('/tabs/learning-center/webinars/info/'+ID_CO);
  }

  volverLearn(){
    this.redireccionService.backpage();
  }

  changepage_(page){
    let pages = [];
    let input;
    if(this.search === 'undefined'){
      input  = '';
    }else{
      input  = this.search;
    }
    this.learncenterService.get_webinnars(page,input)
    .then(resp=>{
      this.CursosData = resp['data'];
      for(let i = 1 ; i <= this.CursosData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.CursosData.page;
    });
  }


}
