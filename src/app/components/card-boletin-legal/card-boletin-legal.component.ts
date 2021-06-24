import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../services/redireccion.service';
import { environment } from '../../../environments/environment.prod';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card-boletin-legal',
  templateUrl: './card-boletin-legal.component.html',
  styleUrls: ['./card-boletin-legal.component.scss'],
})
export class CardBoletinLegalComponent implements OnInit {

  URL = environment.url;
  rol;


  constructor( private redireccionService : RedireccionService, private authService : AuthService) { }


  ngOnInit() {
    this.current_session();
  }
  current_session(){
    this.authService.get_data()
    .then(resp=>{
      console.log(resp);
      this.rol = resp['data']['rol']
    });
  }


}
