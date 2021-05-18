import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { RedireccionService } from '../../services/redireccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cert',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
})
export class CertificadosComponent implements OnInit {
  // @Input() cursos_child : any;
  // @Input() visible : any;

  // @Output() idCursos = new EventEmitter();
 

  URL = environment.url;

  constructor(private redireccionService: RedireccionService, private router: Router) { }

  ngOnInit() {}

  // openNote (ID_CO) {
  //   const { url } = this.router;
  //   this.redireccionService.redireccion(`${url}/${ID_CO}`)
  // }
  // openCursos(ID_CO){
  //   // this.idCursos.emit(ID_CO);
  // }
  
}
