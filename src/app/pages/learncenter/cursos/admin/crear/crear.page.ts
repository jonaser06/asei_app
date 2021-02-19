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

  images : any;
  capacitadorinit = 1;
  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private learncenterService : LearncenterService ) { 
    
  }

  ngOnInit() {
    this.append_capacitador();
  }
  
  /* añadir capacitador */
  append_capacitador(){
    
  }

  /* añadir sesiones */
  append_sesion(){
    let addsesion = document.querySelector('.addsesion');
    let sesion = document.querySelector('.all-session');
    let clone = sesion.cloneNode(true);

    addsesion.appendChild(clone);
  }


  subirimagen(){
    console.log('subido');
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

    console.log("==Guardando capNombre==");
    for (let i = 0; i < capNombre.length; i++) {
      let stringElement = (capNombre[i] as HTMLTextAreaElement).value;
      console.log(stringElement);
    }
    console.log("==Guardando capResume==");
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
