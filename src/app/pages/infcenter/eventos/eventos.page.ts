import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { environment } from 'src/environments/environment';
import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  dialogEventosRead: boolean = false;
  dialogEventosCreate: boolean = false;
  eventosData: any;
  pages : any;
  currentpage : any;
  currentkey: any;
  URL = environment.url;


  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute) { 
    this.geteventos();
  }

  ngOnInit() {
  }

  readDialogEventos(){
    // this.dialogEventosRead = true;
    this.redireccionService.redireccion('/tabs/infcenter/eventos/info');
  }

  createDialogEventos(){
    // this.dialogEventosCreate = true;
    this.redireccionService.redireccion('/tabs/infcenter/eventos/create')
  }

  closeDialogInfo(){
    this.dialogEventosCreate = false;
    this.dialogEventosRead =false;
  }
  
  geteventos(){
    let pages = [];
    this.infcenterService.get_infcenterEventos()
    .then(rspt=>{
      console.log(rspt);
      this.eventosData = rspt['data'];
      for (let i = 1 ; i <= this.eventosData.pages; i++ ){pages.push(i)} 
      this.pages = pages;
      this.currentpage = this.eventosData.page;
    })
    .catch();
    
  }    
  changepage_(page){
    let pages = [];
    this.currentkey = ( this.currentkey === undefined ) ? '':this.currentkey;
    this.infcenterService.search_infcenter('eventos', page, this.currentkey)
    .then(resp=>{
      this.eventosData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.eventosData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.eventosData.page;
      }
    })
    .catch(err=>{
      console.log('ocurrio un error');
    });
  }

  openEventos_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/eventos/info/'+ID_NO);
  }

  editEventos_(ID_NO){
    console.log('EDITAR EVENTOS : '+ID_NO);
    this.redireccionService.redireccion('/tabs/infcenter/eventos/edit/'+ID_NO);
  }
  removeEventos_(ID_NO){
    this.infcenterService.delete_infcenterEventos(ID_NO)
    .then(resp=>{ 
      console.log('ELIMINAR EVENTOS: '+ID_NO);
      this.geteventos();
    })
    .catch();
  }

  search_(buscatxt){
    let pages = [];
    this.currentkey = buscatxt;
    this.infcenterService.search_infcenter('eventos', 1, buscatxt)
    .then(resp=>{ 
      console.log('Buscar Eventos : '+buscatxt);
      this.eventosData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.eventosData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.eventosData.page;
      }
    })
    .catch();
  }

  volverInfo(){
    
    this.redireccionService.backpage();
  }

  openDialogInfo(){}
  


}
