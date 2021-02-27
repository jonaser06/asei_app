import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss'],
})
export class SesionComponent implements OnInit {

  @Output() sesion = new EventEmitter();
  constructor(private uiserviceService: UiServiceService) { }

  ngOnInit() {}

  add_sesion(){
    let nombre = (<HTMLInputElement>document.querySelector('.name-session')).value;
    let link = (<HTMLInputElement>document.querySelector('.link-session')).value;
    if(nombre.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario un nombre');
    if(link.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario un resumen');

    let obj_sesion = { nombre, link };
    this.sesion.emit(obj_sesion);

    (<HTMLInputElement>document.querySelector('.name-session')).value = '';
    (<HTMLInputElement>document.querySelector('.link-session')).value = ''
  }

}
