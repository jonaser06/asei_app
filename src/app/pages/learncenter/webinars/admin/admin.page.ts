import { Component, OnInit } from '@angular/core';
import { LearncenterService } from 'src/app/services/learncenter.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';

import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  URL = environment.url;
  pages : any;
  CursosData:any;
  currentpage : any;
  currentkey : any;
  search : any;
  visible: any;

  constructor(private redireccionService: RedireccionService, private learncenterService: LearncenterService, private uiServiceService: UiServiceService) { }

  ngOnInit() {
    this.getwebinnars();
    this.visible = true;
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

  volverWebinars(){
    this.redireccionService.backpage();
  }

  iraCrear(){
    this.redireccionService.redireccion('/tabs/learning-center/webinars/admin/crear')
  }

  editCursos_(ID_NO){
    console.log('EDITAR webinnars : '+ID_NO);
    // this.redireccionService.redireccion('/tabs/infcenter/news/info/'+ID_NO);
    this.redireccionService.redireccion('/tabs/learning-center/webinars/admin/edit/'+ID_NO);
  }

  removeCursos_(ID_CO){
    this.uiServiceService.presentAlertConfirm('Eliminar', 'Estas seguro que desea eliminar el webinnars')
    .then((res)=>{
      let resp = res.data.resp;
      if(resp){
        this.learncenterService.delete_webinnars(ID_CO,'webinnars')
        .then(resp=>{ 
          console.log('ELIMINAR webinnars : '+ID_CO);
          this.getwebinnars();
        })
        .catch();
      }
    });
  }

}
