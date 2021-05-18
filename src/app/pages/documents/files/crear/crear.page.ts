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
    this.get_document_tipo();
  }

  ngOnInit() {
  }

  get_document_tipo(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.documentsService.get_documentsTiposID(id)
    .then((resp: any)=>{
      this.info_document_tipo = resp.data;
      this.documentstipossrc = this.URL + '/' + resp.data.imagen
      console.log(this.info_document_tipo);
    })
    .catch();
  }

  notificacion(event){
    this.noti = event
    console.log(this.noti);
  }

  volverDocumentsFiles(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.redireccionService.redireccion('/tabs/documents/files/'+id);
  }

  adjuntfile(event){
    this.filebull = event.target.files[0];
    this.filebull_=this.filebull.name;
    console.log(this.filebull.name);
  }

  add_documents_files(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.documentsService.get_documentsTiposID(id).then(resp=>{

      this.DocumentsData = resp['data'];
      this.path = this.DocumentsData.ruta;
      
      let titledocumentsfile = (<HTMLInputElement>document.querySelector('.title-documents-files-tx')).value;

      if(titledocumentsfile.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Por favor, seleccione un nombre para el archivo');

      let formdata = new FormData();
      formdata.append('nombre', titledocumentsfile);
      formdata.append('documentos[]', this.filebull);

      this.documentsService.create_documentsFiles(formdata,this.path)
      .then(resp=>{
        this.redireccionService.redireccion('/tabs/documents/files/'+id);
        console.log(resp);
      })
    })
    .catch();
  }
}

