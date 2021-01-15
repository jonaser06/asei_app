import { Component, OnInit } from '@angular/core';
import { InfcenterService } from 'src/app/services/infcenter.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  dialogEventosRead: boolean = false;
  dialogEventosCreate: boolean = false;

  constructor(private infcenterService: InfcenterService) { 
    this.geteventos();
  }

  ngOnInit() {
  }

  readDialogEventos(){
    this.dialogEventosRead = true;
  }

  createDialogEventos(){
    this.dialogEventosCreate = true;
  }

  closeDialogInfo(){
    this.dialogEventosCreate = false;
    this.dialogEventosRead =false;
  }
  geteventos(){
    this.infcenterService.get_infcenterEventos()
    .then(rspt=>{
      console.log(rspt);
    })
    .catch();
    
  }

}
