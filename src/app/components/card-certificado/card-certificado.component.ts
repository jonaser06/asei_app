import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RedireccionService } from '../../services/redireccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-certificado',
  templateUrl: './card-certificado.component.html',
  styleUrls: ['./card-certificado.component.scss'],
})
export class CardCertificadoComponent implements OnInit {

  @Input() certificados_child : any;
  @Input() visible : any;

  @Output() idCertificados = new EventEmitter();
  

  URL = environment.url;

  constructor(private redireccionService: RedireccionService, private router: Router) { }

  ngOnInit() {}

  openCertificados (ID_CER) {
    const { url } = this.router;
    console.log(url);
    this.redireccionService.redireccion(`${url}/info/${ID_CER}`)
  }
  // openCertificados(ID_CO){
  //   this.idCertificados.emit(ID_CO);
  // }


}
