import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { RedireccionService } from '../../services/redireccion.service';

@Component({
  selector: 'app-card-list-admin',
  templateUrl: './card-list-admin.component.html',
  styleUrls: ['./card-list-admin.component.scss'],
})
export class CardListAdminComponent implements OnInit {

  @Input() user_child : any;

  @Output() idUsers = new EventEmitter();
  @Output() idUsersE = new EventEmitter();
  @Output() idUsersR = new EventEmitter();

  URL = environment.url;

  constructor(private redireccionService: RedireccionService, private router: Router) { }

  ngOnInit() {}

  openNote (ID_US) {
    const { url } = this.router;
    this.redireccionService.redireccion(`${url}/info/${ID_US}`)
  }
  openCursos(ID_US){
    this.idUsers.emit(ID_US);
  }
  editCursos(ID_US){
    this.idUsersE.emit(ID_US);
  }
  removeCursos(ID_US){
    this.idUsersR.emit(ID_US);
  }

}
