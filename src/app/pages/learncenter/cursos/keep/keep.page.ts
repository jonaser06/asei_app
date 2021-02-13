import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-keep',
  templateUrl: './keep.page.html',
  styleUrls: ['./keep.page.scss'],
})
export class KeepPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

}
