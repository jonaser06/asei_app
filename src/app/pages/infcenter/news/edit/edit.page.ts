import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { InfcenterService } from '../../../../services/infcenter.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  fecha_publicacion : any;
  hora_publicacion: any;
  fileToUploadstat: any;
  imagestat: any;

  constructor( public activatedRoute: ActivatedRoute, private redireccionService: RedireccionService, private uiserviceService: UiServiceService , private infcenterService: InfcenterService ) {
    this.get_newsid();
  }

  ngOnInit() {
  }

  get_newsid(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log();
    this.infcenterService.get_infcenterNewsID(id)
    .then((resp: any)=>{
      
      this.titulo = resp.data.titulo;
      this.resumen = resp.data.resumen;
      this.link = resp.data.link;
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
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titulo) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.resumen) return this.uiserviceService.alert_info('Es necesario el resumen');
    if(!this.texto) return this.uiserviceService.alert_info('Es necesario el texto');
    if(!this.link) return this.uiserviceService.alert_info('Es necesario la direccion de enlace');
    if(!this.fecha_publicacion) return this.uiserviceService.alert_info('Es necesario la fecha de publicacion');

    let formdata = new FormData;
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    formdata.append('titulo', this.titulo);
    formdata.append('resumen', this.resumen);
    formdata.append('texto', this.texto);
    formdata.append('fecha_publicacion', this.fecha_publicacion);
    formdata.append('hora_publicacion', this.hora_publicacion);
    formdata.append('seccion', 'noticias');
    formdata.append('link', this.link);
    formdata.append("file", this.fileToUploadstat);

    this.infcenterService.update_infcenterNews(formdata, id)
    .then(resp=>{ 
      console.log('SE EDITO LA NOTA');
      this.redireccionService.backpage();
    })
    .catch();

  }

}
