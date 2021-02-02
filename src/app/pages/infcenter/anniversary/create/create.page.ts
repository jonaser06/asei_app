import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { InfcenterService } from '../../../../services/infcenter.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  /* nueva Aniversario */
  titulo : any;
  resumen : any;
  texto : any;
  // seccion : any;
  fecha_publicacion : any;
  hora_publicacion : any;
  fecha_inicio: any;
  fecha_fin: any;
  hora_inicio: any;
  hora_fin: any;
  fileToUploadstat: any;
  imagestat: any;
  link: any;

  constructor(private redireccionService: RedireccionService, private uiserviceService: UiServiceService, private infcenterService: InfcenterService) { }

  ngOnInit() {
  }
  handleFileInput(event){
    this.fileToUploadstat = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUploadstat);
    reader.onload = () => {
        this.imagestat = reader.result;
    };
  }
  volverAnniversary(){
    // this.dialogCreateNews= true;
    this.redireccionService.backpage();
  }

  createAniversario(fAniversario: NgForm){
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    // if(!this.seccion) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(!this.fecha_publicacion) return this.uiserviceService.alert_info('Es necesario la fecha de publicacion');
    if(!this.hora_publicacion) return this.uiserviceService.alert_info('Es necesario la hora de publicacion');
    if(!this.fecha_inicio) return this.uiserviceService.alert_info('Es necesario la fecha de inicio');
    if(!this.hora_inicio) return this.uiserviceService.alert_info('Es necesario la hora de inico');

    let formdata = new FormData;
    formdata.append('titulo', this.titulo);
    formdata.append('resumen', this.resumen);
    formdata.append('texto', this.texto);
    formdata.append('fecha_publicacion', this.fecha_publicacion);
    formdata.append('hora_publicacion', this.hora_publicacion);
    formdata.append('fecha_inicio', this.fecha_inicio);
    formdata.append('hora_inicio', this.hora_inicio);
    formdata.append('fecha_fin', this.fecha_inicio);
    formdata.append('hora_fin', this.hora_inicio);
    formdata.append('link', this.link);
    formdata.append('seccion', 'aniversarios');
    formdata.append("files[]", this.fileToUploadstat);

    this.infcenterService.create_infcenterNews(formdata)
    .then(resp=>{ 
      console.log('SE CREO EL ANIVERSARIO');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
