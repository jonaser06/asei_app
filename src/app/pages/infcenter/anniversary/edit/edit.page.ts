import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

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
 

  constructor(public activatedRoute: ActivatedRoute, private redireccionService: RedireccionService, private uiserviceService: UiServiceService , private infcenterService: InfcenterService ) { 
    this.get_aniversariosid(); 
  }

  ngOnInit() {
  }

  get_aniversariosid(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.infcenterService.get_infcenterAniversariosID(id)
    .then((resp: any)=>{
      
      this.titulo = resp.data.titulo;
      this.resumen = resp.data.resumen;
      this.texto = this.uiserviceService.stripHtml(resp.data.texto);
      this.fecha_publicacion = resp.data.fecha_publicacion;
      this.hora_publicacion = resp.data.fecha_publicacion;
      this.fecha_inicio = resp.data.fecha_inicio;
      this.hora_inicio = resp.data.fecha_inicio;
      this.imagestat = environment.url + '/' + resp.data.imagenes[0].RUTA;
    })
    .catch();
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

  editAniversario(fAniversario: NgForm){
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    // if(!this.seccion) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(!this.fecha_publicacion) return this.uiserviceService.alert_info('Es necesario la fecha de publicacion');
    if(!this.hora_publicacion) return this.uiserviceService.alert_info('Es necesario la hora de publicacion');
    if(!this.fecha_inicio) return this.uiserviceService.alert_info('Es necesario la fecha de inicio');
    if(!this.hora_inicio) return this.uiserviceService.alert_info('Es necesario la hora de inicio');

    let formdata = new FormData;
    let id = this.activatedRoute.snapshot.paramMap.get('id');

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

    this.infcenterService.update_infcenterAniversarios(formdata , id)
    .then(resp=>{ 
      console.log('SE EDITO EL ANIVERSARIO');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
