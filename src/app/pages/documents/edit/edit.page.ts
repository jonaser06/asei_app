import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.service';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { environment } from 'src/environments/environment';
import { UiServiceService } from '../../../services/ui-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  URL = environment.url;
  noti: any;
  info_document_tipo: any;
  documentstipossrc: any;
  imgdocumentstipos: any;
  tipoimgdoc: string = "";

  constructor( private redireccionService: RedireccionService,public activatedRoute: ActivatedRoute, private documentsService: DocumentsService, private uiserviceService : UiServiceService) { 
    this.get_document_tipo();
  }

  ngOnInit() {

  }

  notificacion(event){
    this.noti = event
    console.log(this.noti);
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
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    let titledocumentstipo = (<HTMLInputElement>document.querySelector('.title-documents-tipos-tx')).value;

    if(titledocumentstipo.replace(/\s/g, "") === '') return this.uiserviceService.alert_info('Por favor, seleccione un nombre para la categoría');

    let formdata = new FormData();

    formdata.append('area', titledocumentstipo);
    formdata.append('estado', '1' );

    (!!this.imgdocumentstipos) && formdata.append('imagen[]', this.imgdocumentstipos); 

    this.documentsService.update_documentsTipos(formdata, id)
    .then(resp=>{
      this.redireccionService.redireccion('/tabs/documents');
      console.log(resp);
      this.imgdocumentstipos = null;
    })
    .catch();
  }

  volverDocumentsTipos(){
    this.redireccionService.redireccion('/tabs/documents');
  }
}
