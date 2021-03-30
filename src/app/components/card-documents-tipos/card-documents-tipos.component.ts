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
export class CardDocumentsTiposComponent implements OnInit {

  @Input() documents_child : any;
  @Input() visible : any;

  @Output() idDocumentsTipos = new EventEmitter();
  @Output() idDocumentsTiposE = new EventEmitter();
  
  rol : String ;

  URL = environment.url;

  constructor(public authService: AuthService, private redireccionService: RedireccionService, private router: Router) { 
    this.current_rol();
  }

  ngOnInit() {}

  openDocumentsTipos(id_ar){
    this.idDocumentsTipos.emit(id_ar);
  }
  
  editDocumentsTipo(id_ar){
    this.idDocumentsTiposE.emit(id_ar);
  }
  
  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
}
