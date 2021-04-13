import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RedireccionService } from '../../services/redireccion.service';
import { environment } from '../../../environments/environment.prod';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card-calendario',
  templateUrl: './card-calendario.component.html',
  styleUrls: ['./card-calendario.component.scss'],
})
export class CardCalendarioComponent implements OnInit {

  @Input() news_child : any;

  @Output() idCalendar = new EventEmitter();

  URL = environment.url;
  iduser;


  constructor(private redireccionService: RedireccionService, private router: Router, private authService : AuthService) { }

  ngOnInit() {
    
  }
 

  openNew(ID_NO){
    this.idCalendar.emit(ID_NO);
  }

}
