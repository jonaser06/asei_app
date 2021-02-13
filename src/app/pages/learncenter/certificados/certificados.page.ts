import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
})
export class CertificadosPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverLearn(){
    this.redireccionService.backpage();
  }

}
