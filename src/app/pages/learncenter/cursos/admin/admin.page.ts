import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

  iraCrear(){
    this.redireccionService.redireccion('/tabs/learning-center/cursos/crear')
  }

}
