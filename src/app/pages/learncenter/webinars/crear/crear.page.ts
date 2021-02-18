import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebinarsService } from 'src/app/services/webinars.service';
import { environment } from 'src/environments/environment';

import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  id = "";
  update = false;
  URL_BS = environment.url;
  webinar_data = {
    "ID_CO" : "",
    "titulo": "",
    "resumen": "",
    "objetivo": "",
    "duracion": "",
    "tipo": "",
    "fecha_publicacion": "",
    "files" : [
      {
        "ID_MULTI": "",
        "ID_CO": "",
        "TIPO": "",
        "FILE_NAME": "",
        "FECHA_CREATED": "",
        "MODIFICADO": "",
        "RUTA": ""
      }
    ],
    "capacitadores":[
      {
        "ID_CA": "",
        "nombre": "",
        "resumen": "",
        "foto": ""
      }
     ],
    "sesiones": [
      {
        "ID_SE": "",
        "nombre": "",
        "link": ""
      }
    ]
  };
  constructor(private redireccionService: RedireccionService,
    private route: ActivatedRoute,
    private webinarsService: WebinarsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != "0"){
      this.update = true;
      this.obtenerCurso(this.id);
    }
  }

  volverWebinars(){
    this.redireccionService.backpage();
  }

  obtenerCurso(id){
    this.webinarsService.get_curso(id)
    .then(resp=>{
      this.webinar_data = resp['data'];
      this.webinar_data.duracion = this.webinar_data.duracion.slice(0,5).trim()
    })
    .catch();
  }

}
