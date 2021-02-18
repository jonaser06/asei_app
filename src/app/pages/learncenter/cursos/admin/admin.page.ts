import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';
import { LearncenterService } from '../../../../services/learncenter.service';
import { environment } from '../../../../../environments/environment.prod';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

  constructor(private redireccionService: RedireccionService, private learncenterService: LearncenterService) {
    this.getcursos();
   }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

  iraCrear(){
    this.redireccionService.redireccion('/tabs/learning-center/cursos/admin/crear')
  }

  openDialogCursos(){
    // this.dialogReadNews = true;
    this.redireccionService.redireccion('/tabs/learning-center/cursos/info');
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
  openCursos_(ID_CO){
    this.redireccionService.redireccion('/tabs/learning-center/cursos/info'+ID_CO);
  }
  
  editCursos_(ID_NO){
    console.log('EDITAR CURSO : '+ID_NO);
    // this.redireccionService.redireccion('/tabs/infcenter/news/info/'+ID_NO);
    this.redireccionService.redireccion('/tabs/learning-center/cursos/edit/'+ID_NO);
  }

  removeCursos_(ID_CO){
    this.learncenterService.delete_learncenterCursos(ID_CO)
    .then(resp=>{ 
      console.log('ELIMINAR CURSO : '+ID_CO);
      this.getcursos();
    })
    .catch();
  }


  // changepage_(page){
  //   let pages = [];
  //   this.currentkey = ( this.currentkey === undefined ) ? '':this.currentkey;
  //   this.learncenterService.search_learncenter('noticias', page, this.currentkey)
  //   .then(resp=>{
  //     this.CursosData = resp['data'];
  //     if(resp['status']){
  //       for(let i = 1 ; i <= this.CursosData.pages; i++ ){pages.push(i)}
  //       this.pages = pages;
  //       this.currentpage = this.CursosData.page;
  //     }
  //   })
  //   .catch(err=>{
  //     console.log('ocurrio un error');
  //   });
  // }

  
  }

 


