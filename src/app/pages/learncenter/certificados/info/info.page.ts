import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCerti(){
    this.redireccionService.backpage();
  }

}
