import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card-documents-tipos',
  templateUrl: './card-documents-tipos.component.html',
  styleUrls: ['./card-documents-tipos.component.scss'],
})
export class CardDocumentsTiposComponent {

  @Input() documentsChild: any;
  @Input() visible: any;

  @Output() idDocumentsTipos = new EventEmitter();
  @Output() idDocumentsTiposE = new EventEmitter();
  @Output() idDocumentsTiposR = new EventEmitter();

  rol: string ;

  URL = environment.url;

  constructor(
    public authService: AuthService
  ) {
    this.current_rol();
  }

  openDocumentsTipos(idAr){
    this.idDocumentsTipos.emit(idAr);
  }

  editDocumentsTipo(idAr){
    this.idDocumentsTiposE.emit(idAr);
  }

  removeTipo(idAr){
    this.idDocumentsTiposR.emit(idAr);
  }

  current_rol(){
    this.authService.get_data()
    .then((resp: any) => {
      this.rol = resp.data.rol;
    });
  }

}
