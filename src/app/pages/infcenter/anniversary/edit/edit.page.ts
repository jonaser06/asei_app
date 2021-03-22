import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from '../../../../../environments/environment';

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

  link_: any;
  links: any[];

  noti: any;
  constructor(public activatedRoute: ActivatedRoute, private redireccionService: RedireccionService, private uiserviceService: UiServiceService , private infcenterService: InfcenterService ) { 
    this.get_aniversariosid();
    this.links = [];
    this.link_ = ''
  }

  ngOnInit() {
  }

  /* toggle notificacion */
  notificacion(event){
    this.noti = event
    console.log(this.noti);
  }

  addlink(){
    if(this.link.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('No se puede agregar un enlace vacio');
    this.links.push(this.link);
    this.link='';
  }
  removelink(item){
    this.links = this.links.filter(e=>e !== item)
  }

  get_aniversariosid(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.infcenterService.get_infcenterAniversariosID(id)
    .then((resp: any)=>{
      
      this.titulo = resp.data.titulo;
      this.resumen = resp.data.resumen;
      this.texto = this.uiserviceService.stripHtml(resp.data.texto);
      this.fecha_publicacion = resp.data.fecha_publicacion;
      this.hora_publicacion = resp.data.hora_publicacion;
      this.fecha_inicio = resp.data.fecha_inicio;
      this.hora_inicio = resp.data.hora_inicio;
      // this.link = resp.data.link;
      this.links = resp.data.link.split(',');
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
    let coma = '';
    this.links.forEach((e, i) => {
      if(i != 0) { coma = ','}
      this.link_ += coma + e;
    });
    // if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    // if(!this.seccion) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(this.link_.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la direccion de enlace');
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
    formdata.append('link', this.link_);
    formdata.append('seccion', 'aniversarios');
    formdata.append("file", this.fileToUploadstat);

    if(this.noti){
      formdata.append('notificacion','{ "id": "'+id+'", "message": "Se actualizó el aniversario: '+this.titulo+'", "type":"aniversarios" }');
    }

    this.infcenterService.update_infcenterAniversarios(formdata , id)
    .then(resp=>{ 
      console.log('SE EDITO EL ANIVERSARIO');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
