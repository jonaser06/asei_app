import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

}
