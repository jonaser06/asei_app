import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RedireccionService } from '../../services/redireccion.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card-list-admin',
  templateUrl: './card-list-admin.component.html',
  styleUrls: ['./card-list-admin.component.scss'],
})
export class CardListAdminComponent implements OnInit {

  @Input() user_child : any;

  @Output() idUsers = new EventEmitter();
  @Output() idUsersDoc = new EventEmitter();

  URL = environment.url;
  rol;

  constructor(private redireccionService: RedireccionService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.current_session();
    console.log('0. ngOnInit');
  }


  current_session(){
    this.authService.get_data()
    .then(resp=>{
      console.log(resp);
      this.rol = resp['data']['rol']
    });
  }

  removeUser(ID_US){
    this.idUsers.emit(ID_US);
  }

  iraperso(ID_US){
    this.idUsersDoc.emit(ID_US);
  }

}
