import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LearncenterService } from 'src/app/services/learncenter.service';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { environment } from 'src/environments/environment';
import { UiServiceService } from '../../../../../services/ui-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  /* curso */
  trainer: any[];
  sesion: any[];
  imagfile: any[];
  imgcourse: any;
  coursesrc: any;
  noti: any;

  info_curso: any;
  URL = environment.url

  ID_CA: any
  nombre: any
  resumen: any
  foto: any;

  ID_SE: any;
  link : any;
  nombre_ : any;


  idus: any;
  constructor( public authService: AuthService, private redireccionService: RedireccionService,public activatedRoute: ActivatedRoute, private uiserviceService : UiServiceService, private learncenterService: LearncenterService) { 
    this.trainer = [];
    this.sesion = [];
    this.imagfile = [];
    this.authService.get_data().then((resp:any)=>{
      this.idus = resp.data.user_id;
    });
    this.get_curso();
  }

  ngOnInit() {

  }
  volverCursos(){
    this.redireccionService.backpage();
  }
  /* añadir capacitador */
  add_trainer(event){
    console.log('trainer')
    this.trainer.push(event);
    this.nombre = event.nombre;
    this.resumen = event.resumen;
  }
  add_image(e){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.foto = e;
    let formdata = new FormData();
    formdata.append('cap_nombres[]', this.nombre);
    formdata.append('cap_resumen[]', this.resumen);
    formdata.append('cap_img[]', this.foto);
    this.learncenterService.add_capacitador(formdata, 'cursos', id)
    .then(resp=>{
      console.log(resp);
    });
    this.imagfile.push(e);
  }
  rmv_btn_trainer(event){
    this.ID_CA = event.ID_CA;
    this.learncenterService.delete_capacitador(this.ID_CA)
    .then(resp=>{
      console.log(resp);
    });
    this.trainer.splice(event.index, 1);
  }
  /* añadir sesiones */
  add_sesion(event){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.nombre_ = event.nombre;
    this.link = event.link;
    let formdata = new FormData();
    formdata.append('sesion_nombres[]', this.nombre_);
    formdata.append('sesion_links[]', this.link);
    this.learncenterService.add_sesion(formdata, 'cursos', id)
    .then(resp=>{
      console.log(resp);
    });
    this.sesion.push(event);
  }
  rmv_btn_sesion(event){
    this.ID_SE = event.ID_SE;
    this.learncenterService.delete_sesion(this.ID_SE)
    .then(resp=>{
      console.log(resp);
    });
    this.sesion.splice(event.index, 1);
  }
  /* toggle notificacion */
  notificacion(event){
    this.noti = event
    console.log(this.noti);
  }

  get_curso(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.learncenterService.get_learncenterCursosID(id)
    .then((resp: any)=>{
      this.info_curso = resp.data;
      this.coursesrc = this.URL + '/' + resp.data.files[0].RUTA
      this.trainer = resp.data.capacitadores;
      this.trainer = this.trainer.map(trainer=>{
        let foto = this.URL+'/'+trainer.foto;
        return {...trainer, foto }
      });
      this.sesion = resp.data.sesiones;
      console.log(this.info_curso);
    })
    .catch();
  }
  img_course(event){
    this.imgcourse = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imgcourse);
    reader.onload = () => {
        this.coursesrc = reader.result;
    };
  }

  add_course(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    let titlecourse = (<HTMLInputElement>document.querySelector('.title-course-tx')).value;
    let summarycourse = (<HTMLInputElement>document.querySelector('.summary-course')).value;
    let objectivecourse = (<HTMLInputElement>document.querySelector('.objective-course')).value;
    let duracion = (<HTMLInputElement>document.querySelector('.duracion')).value;

    if(titlecourse.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario el titulo de curso');
    if(summarycourse.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario un resumen');
    if(objectivecourse.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es necesario el objetivo del curso');
    if(duracion.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Es especificar la duracion');
    // if(!this.imgcourse) return this.uiserviceService.alert_info('selecciona una imagen del curso');

    if(this.trainer.length == 0) return this.uiserviceService.alert_info('Es necesario al menos un capacitador');
    if(this.sesion.length == 0) return this.uiserviceService.alert_info('Es necesario al menos una sesion');


    let formdata = new FormData();
    formdata.append('titulo', titlecourse);
    formdata.append('resumen', summarycourse);
    formdata.append('objetivo', objectivecourse);
    formdata.append('duracion', duracion);

    if(this.noti){
      formdata.append('notificacion','{ "id": "'+id+'", "message": "El Curso: '+titlecourse+' se actualizó", "type":"cursos", "idus":"'+this.idus+'"}');
    }

    (!!this.imgcourse) && formdata.append('img_learn[]', this.imgcourse); 

    this.learncenterService.update_course('cursos', id, formdata)
    .then(resp=>{
      this.redireccionService.redireccion('/tabs/learning-center/cursos/admin');
      console.log(resp);
    })
    .catch();
    
  }

}
