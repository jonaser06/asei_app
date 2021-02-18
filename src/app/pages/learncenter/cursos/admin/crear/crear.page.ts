import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../../../services/redireccion.service';
import { LearncenterService } from '../../../../../services/learncenter.service';
import { UiServiceService } from '../../../../../services/ui-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  /*NUEVO CURSO*/

  seccion : any;
  titulo : any;
  resumen : any;
  objetivo : any;
  duracion : any;
  sesionNombre : any;
  sesionLink : any;
  capNombres : any;
  capResumen : any;
  imgCurso : any;
  imgCap : any;
  fileImgCap : any;
  fileImgCurso : any;
  fileSesionNombre : any;
  fileSesionLink : any;
  fileCapNombres : any;
  fileCapResumen : any;

  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private learncenterService : LearncenterService ) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

  crearImgCurso(event){
    this.fileImgCurso = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileImgCurso);
    reader.onload = () => {
        this.imgCurso = reader.result;
    };
  }
  crearImgCap(event){
    this.fileImgCap = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileImgCap);
    reader.onload = () => {
        this.imgCap = reader.result;
    };
  }

  crearSesionNombre(event){
    this.fileSesionNombre = event.sesion_nombres[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileSesionNombre);
    reader.onload = () => {
        this.sesionNombre = reader.result;
    };
  }

  crearSesionLink(event){
    this.fileSesionLink = event.target.sesion_links[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileSesionLink);
    reader.onload = () => {
        this.sesionLink = reader.result;
    };
  }

  crearCapNombre(event){
    this.fileCapNombres = event.target.cap_nombres[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileCapNombres);
    reader.onload = () => {
        this.capNombres = reader.result;
    };
  }

  crearCapResumen(event){
    this.fileCapResumen = event.target.cap_resumen[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileCapResumen);
    reader.onload = () => {
        this.capResumen = reader.result;
    };
  }


  volvernews(){
    // this.dialogCreateNews= true;
    this.redireccionService.backpage();
  }
  createCursos(fCursos: NgForm){
    // if(!this.seccion) return this.uiserviceService.alert_info('Es necesario una seccion');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.objetivo) return this.uiserviceService.alert_info('Es necesario el objetivo');
    if(!this.duracion) return this.uiserviceService.alert_info('Es necesario la duracion');
    if(!this.fileSesionNombre) return this.uiserviceService.alert_info('Es necesario una sesion');
    if(!this.fileSesionLink) return this.uiserviceService.alert_info('Es necesario un link');
    if(!this.fileCapNombres) return this.uiserviceService.alert_info('Es necesario el nombre');
    if(!this.fileCapResumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.fileImgCurso) return this.uiserviceService.alert_info('Es necesario la imagen');
    if(!this.fileImgCap) return this.uiserviceService.alert_info('Es necesario la imagen');
   
   

    let formdata = new FormData;
    formdata.append('seccion','cursos');
    formdata.append('titulo', this.titulo);
    formdata.append('resumen', this.resumen);
    formdata.append('objetivo', this.objetivo);
    formdata.append('duracion', this.duracion);
    formdata.append('sesion_nombres[]', this.fileSesionNombre);
    formdata.append('sesion_links[]', this.fileSesionLink);
    formdata.append('cap_nombres[]', this.fileCapNombres);
    formdata.append('cap_resumen[]', this.fileCapResumen);
    formdata.append('img_learn[]', this.fileImgCurso);
    formdata.append('files[]', this.fileImgCap);

    

    this.learncenterService.create_learncenterCursos(formdata)
    .then(resp=>{ 
      console.log('SE CREO LA NOTA');
      this.redireccionService.backpage();
    })
    .catch(); 
  }
}
