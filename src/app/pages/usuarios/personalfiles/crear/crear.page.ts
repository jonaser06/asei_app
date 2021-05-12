import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RedireccionService } from 'src/app/services/redireccion.service';
import { DocumentsService } from 'src/app/services/documents.service';
import { UiServiceService } from '../../../../services/ui-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  URL = environment.url;
  documentstipossrc: any;
  noti: any;
  imagfile: any[];
  tipoimgdoc: string = "";
  info_document_tipo: any;
  filebull: any;
  filebull_: any;
  DocumentsData: any;
  DocumentsFilesData: any;
  path: any;
  isEdited = false;

  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private documentsService : DocumentsService, public activatedRoute: ActivatedRoute ) { 
    this.noti = false;
  }

  ngOnInit() {
  }

  notificacion(event){
    this.noti = event
    console.log(this.noti);
  }

  volverDocumentsFiles(){
    this.redireccionService.backpage();
  }

  adjuntfile(event){
    this.filebull = event.target.files[0];
    this.filebull_=this.filebull.name;
    console.log(this.filebull.name);
  }

  add_documents_files(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    let titledocumentsfile = (<HTMLInputElement>document.querySelector('.title-documents-files-tx')).value;

    if(titledocumentsfile.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Por favor, seleccione un nombre para el archivo');

    let formdata = new FormData();
    formdata.append('nombre', titledocumentsfile);
    formdata.append('documentos[]', this.filebull);

    this.documentsService.create_documentspersonalFiles(formdata,id)
    .then(resp=>{
      this.redireccionService.backpage();
      console.log(resp);
    })
    .catch();
  }
}

