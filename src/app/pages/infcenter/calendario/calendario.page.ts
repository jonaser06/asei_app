import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from '../../../services/infcenter.service';
import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  volverInfo(){
    
    this.redireccionService.backpage();
  }

}
