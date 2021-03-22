import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RedireccionService } from '../../services/redireccion.service';

@Component({
  selector: 'app-card-list-admin',
  templateUrl: './card-list-admin.component.html',
  styleUrls: ['./card-list-admin.component.scss'],
})
export class CardListAdminComponent implements OnInit {

  @Input() user_child : any;

  @Output() idUsers = new EventEmitter();

  URL = environment.url;

  constructor(private redireccionService: RedireccionService, private router: Router) { }

  ngOnInit() {}

  removeUser(ID_US){
    this.idUsers.emit(ID_US);
  }

}
