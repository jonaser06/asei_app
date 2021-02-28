import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RedireccionService } from '../../services/redireccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  location : any;

  @Output() buscar = new EventEmitter();

  constructor(private router: Router,private redireccionService: RedireccionService) { 
    
  }

  ngOnInit() {}

 

  onSearchChange( ){
    let key = (<HTMLInputElement>document.querySelector('.buscar')).value;
    this.buscar.emit(key);
  }
  
  createSection(){
    const { url } = this.router;
    this.redireccionService.redireccion(`${url}/create`);
  }
   

}
