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

  /* curso */
  trainer: any[];
  sesion: any[];
  imagfile: any[];
  imgcourse: any;
  coursesrc: any;
  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private learncenterService : LearncenterService ) { 
    this.trainer = [];
    this.sesion = [];
    this.imagfile = [];
    console.log(this.trainer.length);
  }

  ngOnInit() {
  }

  /* imagen del curso */
  img_course(event){
    this.imgcourse = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imgcourse);
    reader.onload = () => {
        this.coursesrc = reader.result;
    };
  }
  
  /* añadir capacitador */
  add_trainer(event){
    this.trainer.push(event);
  }
  add_image(event){
    this.imagfile.push(event);
  }
  /* añadir sesiones */
  add_sesion(event){
    this.sesion.push(event);
  }
  rmv_btn_trainer(event){
    this.trainer.splice(event, 1);
  }
  rmv_btn_sesion(event){
    this.sesion.splice(event, 1);
  }

  /* añadir curso */
  add_course(){
    let titlecourse = (<HTMLInputElement>document.querySelector('.title-course-tx')).value;
    let summarycourse = (<HTMLInputElement>document.querySelector('.summary-course')).value;
    let objectivecourse = (<HTMLInputElement>document.querySelector('.objective-course')).value;
    let duracion = (<HTMLInputElement>document.querySelector('.duracion')).value;

    if(titlecourse.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario el titulo de curso');
    if(summarycourse.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario un resumen');
    if(objectivecourse.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario el objetivo del curso');
    if(duracion.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es especificar la duracion');
    if(!this.imgcourse) return this.uiserviceService.alert_info('selecciona una imagen del curso');

    if(this.trainer.length == 0) return this.uiserviceService.alert_info('Es necesario al menos un capacitador');
    if(this.sesion.length == 0) return this.uiserviceService.alert_info('Es necesario al menos una sesion');

    let formdata = new FormData();
    formdata.append('titulo', titlecourse);
    formdata.append('resumen', summarycourse);
    formdata.append('objetivo', objectivecourse);
    formdata.append('duracion', duracion);
    formdata.append('img_learn[]', this.imgcourse);
    /* cursos, */
    formdata.append('seccion', 'cursos');

    for(let i = 0 ; i < this.trainer.length ; i++){
      formdata.append('cap_nombres[]', this.trainer[i]['name']);
      formdata.append('cap_resumen[]', this.trainer[i]['lastname']);
    }

    for(let i = 0 ; i < this.sesion.length ; i++){
      formdata.append('sesion_nombres[]', this.sesion[i]['namesession']);
      formdata.append('sesion_links[]', this.sesion[i]['linksession']);
    }
    for(let i = 0 ; i < this.imagfile.length ; i++){
      formdata.append('cap_img[]', this.imagfile[i]);
    }

    this.learncenterService.create_learncenterCursos(formdata)
    .then(resp=>{
      console.log(resp);
    })
    .catch();

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
    console.log('Hola')
    // let fileImg = document.querySelectorAll('.imgfile');
    // console.log(fileImg.length);
    // this.fileImgCap = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(this.fileImgCap);
    // reader.onload = () => {
    //     this.imgCap = reader.result;
    // };
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
    
    let capNombre = document.querySelectorAll(".capNombres");
    let capResume = document.querySelectorAll(".capResumen");

    
    for (let i = 0; i < capNombre.length; i++) {
      let stringElement = (capNombre[i] as HTMLTextAreaElement).value;
      console.log(stringElement);
    }
    
    for (let i = 0; i < capResume.length; i++) {
      let stringElement = (capNombre[i] as HTMLTextAreaElement).value;
      console.log(stringElement);
    }
    

    // this.learncenterService.create_learncenterCursos(formdata)
    // .then(resp=>{ 
    //   console.log('SE CREO LA NOTA');
    //   this.redireccionService.backpage();
    // })
    // .catch(); 
  }
}
