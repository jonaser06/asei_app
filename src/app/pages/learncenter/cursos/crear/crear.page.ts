import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

}
