import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RedireccionService } from '../../services/redireccion.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  location : any;

  @Output() buscatxt = new EventEmitter();
  rol : String ;

  constructor(private router: Router, private authService: AuthService, private redireccionService: RedireccionService) { 
    this.current_rol();
  }

  ngOnInit() {}

 

  onSearchChange(event){
    let key = event.detail.value;
    this.buscatxt.emit(key);
  }
  
  createSection(){
    const { url } = this.router;
    this.redireccionService.redireccion(`${url}/create`);
  }
   
  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
}
