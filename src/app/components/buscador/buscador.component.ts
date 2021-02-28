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

  @Output() buscatxt = new EventEmitter();

  constructor(private router: Router,private redireccionService: RedireccionService) { 
    
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
   

}
