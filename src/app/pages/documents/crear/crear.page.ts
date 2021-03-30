import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RedireccionService } from 'src/app/services/redireccion.service';
import { DocumentsService } from 'src/app/services/documents.service';
import { UiServiceService } from '../../../services/ui-service.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  imgdocumentstipos: any;
  documentstipossrc: any;
  noti: any;
  imagfile: any[];
  tipoimgdoc: string = "";

  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private documentsService : DocumentsService, public activatedRoute: ActivatedRoute ) { 
    this.imagfile = [];
    this.noti = false;
  }

  ngOnInit() {
  }

  img_documents_tipos(event){
    this.imgdocumentstipos = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imgdocumentstipos);
    this.tipoimgdoc=this.imgdocumentstipos.type.split("/", 1);
    if(this.tipoimgdoc != "image") 
    {
      this.imgdocumentstipos=false;
      return this.uiserviceService.alert_info('Selecciona un formato válido');
    }
    reader.onload = () => {
        this.documentstipossrc = reader.result;
    };
  }

  add_documents_tipos(){
    let titledocumentstipo = (<HTMLInputElement>document.querySelector('.title-documents-tipos-tx')).value;

    if(titledocumentstipo.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Por favor, seleccione un nombre para la categoría');
    if(!this.imgdocumentstipos) return this.uiserviceService.alert_info('Por favor, seleccione una imagen para la categoría');

    let formdata = new FormData();
    formdata.append('area', titledocumentstipo);
    formdata.append('imagen[]', this.imgdocumentstipos);
    formdata.append('estado', 'activo');

    this.documentsService.create_documentsTipos(formdata)
    .then(resp=>{
      this.redireccionService.redireccion('/tabs/documents');
      console.log(resp);
      this.imgdocumentstipos = null;
    })
    .catch();
  }

  notificacion(event){
    this.noti = event
    console.log(this.noti);
  }

  volverDocumentsTipos(){
    this.redireccionService.redireccion('/tabs/documents');
  }
}

