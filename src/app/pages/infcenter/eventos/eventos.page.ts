import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
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
    this.infcenterService.get_infcenterEventos(page)
    .then(resp=>{
      this.eventosData= resp['data'];
      for(let i = 1 ; i <= this.eventosData.pages; i++ ){pages.push(i)}
      this.pages = pages;
      this.currentpage = this.eventosData.page;
    })
    .catch();
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
    this.infcenterService.search_infcenter('eventos', buscatxt)
    .then(resp=>{ 
      console.log('Buscar eventos : '+buscatxt);
      this.eventosData = resp['data'];
    })
    .catch();
  }

  openDialogInfo(){}

}
