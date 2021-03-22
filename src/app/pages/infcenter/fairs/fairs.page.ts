import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../services/redireccion.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.page.html',
  styleUrls: ['./fairs.page.scss'],
})
export class FairsPage implements OnInit {

  dialogFeriasRead: boolean = false;
  dialogFeriasCreate: boolean = false;
  news_data : any;
  pages : any;
  currentpage : any;
  URL = environment.url;
  currentkey : any;
  

  feriasData: any;
  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute) { 
    this.getferias();
  }

  ngOnInit() {
  }

  createDialogFerias(){
    // this.dialogFeriasCreate = true;
    this.redireccionService.redireccion('tabs/infcenter/fairs/create')
  }

  readDialogFerias(){
    // this.dialogFeriasRead = true;
    this.redireccionService.redireccion('tabs/infcenter/fairs/info')
  }

  // closeDialogInfo(){
  //   this.dialogFeriasCreate = false;
  //   this.dialogFeriasRead =false;
  // }


 
  getferias(){
    let pages = [];
    this.infcenterService.get_infcenterFerias()
    .then(resp=>{
      this.feriasData = resp['data'];
      for(let i = 1 ; i <= this.feriasData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.feriasData.page;

    })
    .catch();
    
  }

  changepage_(page){
    let pages = [];
    this.currentkey = ( this.currentkey === undefined ) ? '':this.currentkey;
    this.infcenterService.search_infcenter('ferias', page, this.currentkey)
    .then(resp=>{
      this.feriasData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.feriasData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.feriasData.page;
      }
    })
    .catch(err=>{
      console.log('ocurrio un error');
    });
  }

  openFerias_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/fairs/info/'+ID_NO); 
  }
  editFerias_(ID_NO){
    console.log('EDITAR FERIA : '+ID_NO);
    this.redireccionService.redireccion('/tabs/infcenter/fairs/edit/'+ID_NO);
  }
  removeFerias_(ID_NO){
    this.infcenterService.delete_infcenterNews(ID_NO)
    .then(resp=>{ 
      console.log('ELIMINAR FERIA : '+ID_NO);
      this.getferias();
    })
    .catch();
  }

  search_(buscatxt){
    let pages = [];
    this.currentkey = buscatxt;
    this.infcenterService.search_infcenter('ferias', 1, buscatxt)
    .then(resp=>{ 
      console.log('Buscar Ferias : '+buscatxt);
      this.feriasData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.feriasData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.feriasData.page;
      }
    })
    .catch();
  }

  volverInfo(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/fairs')
    this.redireccionService.backpage();
  }

  openDialogInfo(){}

}
