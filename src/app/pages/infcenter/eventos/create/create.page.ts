import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../../services/redireccion.service';
import { InfcenterService } from '../../../../services/infcenter.service';
import { UiServiceService } from '../../../../services/ui-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

    /* nueva eventos */
    titulo : any;
    resumen : any;
    texto : any;
    // seccion : any;
    fecha_publicacion: any;
    hora_publicacion: any;
    fecha_inicio : any;
    fecha_fin : any;
    hora_inicio : any;
    hora_fin : any;
    fileToUploadstat: any;
    imagestat: any;
    link: any;

    link_: any;
    links: any[];

    noti: any;
  constructor(private redireccionService: RedireccionService, private infcenterService: InfcenterService, private uiserviceService: UiServiceService) { 
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


  volverEventos(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/eventos');
    this.redireccionService.backpage();
  }
  
  handleFileInput(event){
    this.fileToUploadstat = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUploadstat);
    reader.onload = () => {
        this.imagestat = reader.result;
    };
  }
  createEventos(fEventos: NgForm){
    let coma = '';
    this.links.forEach((e, i) => {
      if(i != 0) { coma = ','}
      this.link_ += coma + e;
    });
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    // if(!this.seccion) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(this.link_.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la direccion de enlace');
    if(!this.fecha_publicacion) return this.uiserviceService.alert_info('Es necesario la fecha de publicacion');
    if(!this.hora_publicacion) return this.uiserviceService.alert_info('Es necesario la hora de publicacion');
    if(!this.fecha_inicio) return this.uiserviceService.alert_info('Es necesario la fecha de inicio');
    if(!this.fecha_fin) return this.uiserviceService.alert_info('Es necesario la fecha fin');
    if(!this.hora_inicio) return this.uiserviceService.alert_info('Es necesario la hora de inicio');
    if(!this.hora_fin) return this.uiserviceService.alert_info('Es necesario la hora fin');

    let formdata = new FormData;
    formdata.append('titulo', this.titulo);
    formdata.append('resumen', this.resumen);
    formdata.append('texto', this.texto);
    formdata.append('fecha_publicacion', this.fecha_publicacion);
    formdata.append('hora_publicacion', this.hora_publicacion);
    formdata.append('fecha_inicio', this.fecha_inicio);
    formdata.append('fecha_fin', this.fecha_fin);
    formdata.append('hora_inicio', this.hora_inicio);
    formdata.append('hora_fin', this.hora_fin);
    formdata.append('link', this.link_);
    formdata.append('seccion', 'eventos');
    formdata.append("files[]", this.fileToUploadstat);

    if(this.noti){
      formdata.append('notificacion','{"message": "Se publicó el evento: '+this.titulo+'", "type":"eventos" }');
      console.log(`{ message: 'Se publico el evento:  ${this.titulo}', type:'eventos' }`);
    }

    this.infcenterService.create_infcenterNews(formdata)
    .then(resp=>{ 
      console.log('SE CREO EL EVENTO');
      this.redireccionService.backpage();
    })
    .catch();

  }

}


