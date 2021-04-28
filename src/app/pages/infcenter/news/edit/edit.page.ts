import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { InfcenterService } from '../../../../services/infcenter.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  /* editar noticia */
  titulo : any;
  resumen : any;
  texto : any;
  seccion : any;
  link : any;
  link_ : any;
  fecha_publicacion : any;
  hora_publicacion: any;
  fileToUploadstat: any;
  imagestat: any;

  links : any[];

  noti: any;
  idus: any;
  constructor( public authService: AuthService, public activatedRoute: ActivatedRoute, private redireccionService: RedireccionService, private uiserviceService: UiServiceService , private infcenterService: InfcenterService ) {
    this.get_newsid();
    this.authService.get_data().then((resp:any)=>{
      this.idus = resp.data.user_id;
    });
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

  get_newsid(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log();
    this.infcenterService.get_infcenterNewsID(id)
    .then((resp: any)=>{
      
      this.titulo = resp.data.titulo;
      this.resumen = resp.data.resumen;
      // this.link = resp.data.link;
      this.links = resp.data.link.split(',');
      this.texto = this.uiserviceService.stripHtml(resp.data.texto);
      this.fecha_publicacion = resp.data.fecha_publicacion;
      this.hora_publicacion = resp.data.hora_publicacion;
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

  volvernews(){
    // this.dialogCreateNews= true;
    this.redireccionService.backpage();
  }

  editNews(fNews: NgForm){
    let coma = '';
    this.links.forEach((e, i) => {
      if(i != 0) { coma = ','}
      this.link_ += coma + e;
    });
    // console.log(this.link_);
    // return;
    // if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    if(this.link_.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la direccion de enlace');
    if(!this.fecha_publicacion) return this.uiserviceService.alert_info('Es necesario la fecha de publicacion');
    if(!this.hora_publicacion) return this.uiserviceService.alert_info('Es necesario la hora de publicacion');

    let formdata = new FormData;
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    formdata.append('titulo', this.titulo);
    formdata.append('resumen', this.resumen);
    formdata.append('texto', this.texto);
    formdata.append('fecha_publicacion', this.fecha_publicacion);
    formdata.append('hora_publicacion', this.hora_publicacion);
    formdata.append('seccion', 'noticias');
    formdata.append('link', this.link_);
    formdata.append("file", this.fileToUploadstat);

    if(this.noti){
      formdata.append('notificacion','{ "id": "'+id+'", "message": "Se actualizó la noticia: '+this.titulo+'", "type":"news", "idus":"'+this.idus+'"}');
      console.log(`{ id: ${id}, message: 'Se actualizó la noticia:  ${this.titulo}', type:'news' }`);
    }

    this.infcenterService.update_infcenterNews(formdata, id)
    .then(resp=>{ 
      console.log('SE EDITO LA NOTA');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
