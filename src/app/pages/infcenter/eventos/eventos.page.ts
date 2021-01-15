import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  dialogEventosRead: boolean = false;
  dialogEventosCreate: boolean = false;

  constructor() { }

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

}
