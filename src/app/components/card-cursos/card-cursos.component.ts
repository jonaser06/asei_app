import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.scss'],
})
export class CardCursosComponent implements OnInit {

  @Input() cursos_child : any;
  @Input() visible : any;

  @Output() idCursos = new EventEmitter();
  @Output() idCursosE = new EventEmitter();
  @Output() idCursosR = new EventEmitter();

  URL = environment.url;

  constructor(private redireccionService: RedireccionService, private router: Router) { }

  ngOnInit() {}

  openNote (ID_CO) {
    const { url } = this.router;
    this.redireccionService.redireccion(`${url}/info/${ID_CO}`)
  }
  openCursos(ID_CO){
    this.idCursos.emit(ID_CO);
  }
  editCursos(ID_CO){
    this.idCursosE.emit(ID_CO);
  }
  removeCursos(ID_CO){
    this.idCursosR.emit(ID_CO);
  }



}
