import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../services/redireccion.service';
import { environment } from '../../../../environments/environment.prod';

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
    this.infcenterService.get_infcenterFerias(page)
    .then(resp=>{
      this.feriasData = resp['data'];
      for(let i = 1 ; i <= this.feriasData.pages; i++ ){pages.push(i)}
      this.pages = pages;
      this.currentpage = this.feriasData.page;
    })
    .catch();
  }
  

  openFerias_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/fairs/info/'+ID_NO); 
  }
  editFerias_(ID_NO){
    console.log('EDITAR FERIAS : '+ID_NO);
    this.redireccionService.redireccion('/tabs/infcenter/fairs/edit/'+ID_NO);
  }
  removeFerias_(ID_NO){
    this.infcenterService.delete_infcenterFerias(ID_NO)
    .then(resp=>{ 
      console.log('ELIMINAR NOTA : '+ID_NO);
      this.getferias();
    })
    .catch();
  }
  search_(buscatxt){
    this.infcenterService.search_infcenter('ferias', buscatxt)
    .then(resp=>{ 
      console.log('Buscar feria : '+buscatxt);
      this.feriasData = resp['data'];
    })
    .catch();
  }

  openDialogInfo(){}
    


}
