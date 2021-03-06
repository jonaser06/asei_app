import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { InfcenterService } from '../../../../services/infcenter.service';
import { AuthService } from 'src/app/services/auth.service';

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
  calendario : any;
  fileToUploadstat: any;
  imagestat: any;
  link: any;

  link_: any;
  links: any[];

  noti: any;
  idus: any;
  constructor(public authService: AuthService, private redireccionService: RedireccionService, private uiserviceService: UiServiceService, private infcenterService: InfcenterService) { 
    this.links = [];
    this.calendario = 0;
    this.link_ = '';
    this.authService.get_data().then((resp:any)=>{
      this.idus = resp.data.user_id;
    });
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

   
  calendar(event){
    this.calendario = (event) ? 1 : 0 ;
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
    let coma = '';
    if(this.links.length > 0){
      this.links.forEach((e, i) => {
        if(i != 0) { coma = ','}
        this.link_ += coma + e;
      });
    }else{
      this.link_ = this.link;
    }

    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    // if(!this.seccion) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(this.link_.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la direccion de enlace');
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
    formdata.append('calendario', this.calendario);
    formdata.append("files[]", this.fileToUploadstat);

    if(this.noti){
      formdata.append('notificacion','{ "message": "Se publicó el aniversario:  '+this.titulo+'", "type":"aniversarios", "idus":"'+this.idus+'" }');
      console.log(`{ message: 'Se publico el aniversario:  ${this.titulo}', type:'aniversarios' }`);
    }

    this.infcenterService.create_infcenterNews(formdata)
    .then(resp=>{ 
      console.log('SE CREO EL ANIVERSARIO');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
