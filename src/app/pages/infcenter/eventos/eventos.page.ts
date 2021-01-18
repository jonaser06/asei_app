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
    this.infcenterService.get_infcenterEventos()
    .then(rspt=>{
      console.log(rspt);
      this.eventosData = rspt['data']
    })
    .catch();
    
  }
  
  openNew_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/eventos/info/'+ID_NO);
  }

  openDialogInfo(){}
    

}
