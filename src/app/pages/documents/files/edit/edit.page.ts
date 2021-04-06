import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RedireccionService } from 'src/app/services/redireccion.service';
import { DocumentsService } from 'src/app/services/documents.service';
import { UiServiceService } from '../../../../services/ui-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  URL = environment.url;
  documentstipossrc: any;
  noti: any;
  imagfile: any[];
  tipoimgdoc: string = "";
  info_document_tipo: any;
  info_document_file: any;
  filebull: any;
  filebull_: any;
  DocumentsData: any;
  DocumentsFilesData: any;
  path: any;
  documentfilesrc: any;
  previousUrl: string;
  isEdited = false;

  constructor(private redireccionService: RedireccionService, private uiserviceService : UiServiceService, private documentsService : DocumentsService, public activatedRoute: ActivatedRoute ) { 
    this.noti = false;
    this.get_document_file();
  }

  ngOnInit() {
  }

  notificacion(event){
    this.noti = event
    console.log(this.noti);
  }

  volverDocumentsFiles(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.redireccionService.redireccion('/tabs/documents/files/'+id);
  }

  get_document_file(){
    let id_doc = this.activatedRoute.snapshot.paramMap.get('id_doc');
    let id_ar = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.documentsService.get_documentsFilesID(id_ar,id_doc).then((resp: any)=>{
      this.isEdited = true;
      this.info_document_file = resp.data;
      this.filebull_ = resp.data.FILE_NAME;
      console.log(this.info_document_file);
    })
    .catch();
  }

  adjuntfile(event){
    this.filebull = event.target.files[0];
    this.filebull_=this.filebull.name;
    console.log(this.filebull.name);
  }
  
  add_documents_files(){
    let id_doc = this.activatedRoute.snapshot.paramMap.get('id_doc');
    let id_ar = this.activatedRoute.snapshot.paramMap.get('id');

    let titledocumentsfile = (<HTMLInputElement>document.querySelector('.title-documents-files-tx')).value;

    if(titledocumentsfile.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Por favor, seleccione un nombre para el archivo');

    let formdata = new FormData();

    formdata.append('nombre',titledocumentsfile);
    (!!this.filebull) && formdata.append('documentos[]', this.filebull);
    this.documentsService.update_documentsFiles(formdata,id_ar,id_doc).then(resp=>{
      this.redireccionService.redireccion('/tabs/documents/files/'+id_ar);
      console.log(resp);
      this.filebull = null;
    })
    .catch();
  }
}

