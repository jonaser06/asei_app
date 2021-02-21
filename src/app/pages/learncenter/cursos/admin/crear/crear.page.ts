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

  /* curso */
  trainer: any[];
  sesion: any[];
  imagfile: any[];
  imgcourse: any;
  coursesrc: any;
  noti: any;

  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private learncenterService : LearncenterService ) { 
    this.trainer = [];
    this.sesion = [];
    this.imagfile = [];
    this.noti = false;
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
  rmv_btn_trainer(event){
    this.trainer.splice(event, 1);
  }
  /* añadir sesiones */
  add_sesion(event){
    this.sesion.push(event);
  }
  rmv_btn_sesion(event){
    this.sesion.splice(event, 1);
  }
  /* toggle notificacion */
  notificacion(event){
    this.noti = event
    console.log(this.noti);
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

}
