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

  /* nueva noticia */
  titulo : any;
  resumen : any;
  texto : any;
  seccion : any;
  link : any;
  link_ : any;
  calendario : any;
  fecha_publicacion : any;
  hora_publicacion : any;
  fileToUploadstat: any;
  imagestat: any;

  links : any[];

  noti: any;
  idus: any;
  constructor( public authService: AuthService, private redireccionService: RedireccionService, private uiserviceService: UiServiceService , private infcenterService: InfcenterService ) { 
    this.links = [];
    this.calendario = 0;
    this.link_ = ''
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
    console.log(this.links);
    this.link='';
  }
  removelink(item){
    this.links = this.links.filter(e=>e !== item)
    console.log(item);
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
  volvernews(){
    // this.dialogCreateNews= true;
    this.redireccionService.backpage();
  }
  createNews(fNews: NgForm){
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
    if(this.link_.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la direccion de enlace');
    if(!this.fecha_publicacion) return this.uiserviceService.alert_info('Es necesario la fecha de publicacion');
    if(!this.hora_publicacion) return this.uiserviceService.alert_info('Es necesario la hora de publicacion');

    let formdata = new FormData;
    formdata.append('titulo', this.titulo);
    formdata.append('resumen', this.resumen);
    formdata.append('texto', this.texto);
    formdata.append('fecha_publicacion', this.fecha_publicacion);
    formdata.append('hora_publicacion', this.hora_publicacion);
    formdata.append('link', this.link_);
    formdata.append('seccion', 'noticias');
    formdata.append('calendario', this.calendario);
    formdata.append("files[]", this.fileToUploadstat);

    if(this.noti){
      formdata.append('notificacion','{ "message": "Se publicó la noticia:  '+this.titulo+'", "type":"news", "idus":"'+this.idus+'" }');
      console.log(`{ message: 'Se publico la noticia:  ${this.titulo}', type:'news' }`);
    }

    this.infcenterService.create_infcenterNews(formdata)
    .then(resp=>{ 
      console.log('SE CREO LA NOTA');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
