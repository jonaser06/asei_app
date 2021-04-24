import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.service';
import { RedireccionService } from '../../../services/redireccion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-documentsfiles',
  templateUrl: './documentsfiles.page.html',
  styleUrls: ['./documentsfiles.page.scss'],
})
export class DocumentsFilesPage implements OnInit {

  URL = environment.url;
  search : any;
  DocumentsFilesData: any;
  info_document_tipo: any;
  documentstipossrc: any;
  currentkey : any;
  pages: any;
  currentpage : any;
  visible: any;
  rol : String ;

  constructor(public authService: AuthService, public activatedRoute: ActivatedRoute, private redireccionService: RedireccionService, private documentsService: DocumentsService, private uiServiceService: UiServiceService) { 
    this.getdocumentsfiles();
    this.get_document_tipo();
    this.current_rol();
    this.visible = true;
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

  onSearchChange(event){
    let input = event.detail.value;
    this.search = input;
    let pages = [];
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.documentsService.get_documentsFiles(1, id, input) 
    .then(resp=>{
      this.DocumentsFilesData = resp['data'];
      for(let i = 1 ; i <= this.DocumentsFilesData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.DocumentsFilesData.page;
    });
  }

  getdocumentsfiles(){
    let pages = [];
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.documentsService.get_documentsFiles(1, id, '')
    .then(resp=>{
      console.log();
      this.DocumentsFilesData = resp['data'];
      for(let i = 1 ; i <= this.DocumentsFilesData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.DocumentsFilesData.page;
    })
    .catch();
  }

  changepage_(page){
    let pages = [];
    let input;
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.search === 'undefined'){
      input  = '';
    }else{
      input  = this.search;
    }
    this.documentsService.get_documentsFiles(page, id, input)
    .then(resp=>{
      this.DocumentsFilesData = resp['data'];
      for(let i = 1 ; i <= this.DocumentsFilesData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.DocumentsFilesData.page;
    });
  }

  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }

  volverDocumentsTipos(){
    this.redireccionService.redireccion('/tabs/documents');
  }

  newDocumentsfiles(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.redireccionService.redireccion('/tabs/documents/files/'+id+'/crear')
  }

  editDocumentsfile_(ID_DOC){
    console.log('EDITAR ARCHIVO : '+ID_DOC);
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.redireccionService.redireccion('/tabs/documents/files/'+id+'/edit/'+ID_DOC);
  }

  removeFile_(ID_DOC){
    let id_ar = this.activatedRoute.snapshot.paramMap.get('id');
    this.uiServiceService.presentAlertConfirm('Eliminar archivo','Se eliminará el archivo ¿Quieres continuar ?').then((res)=>{
      let resp = res.data.resp;
      if(resp){
        this.documentsService.delete_file(id_ar,ID_DOC).then(resp=>{
          console.log('ELIMINANDO ARCHIVO: '+ID_DOC+', EN LA CATEGORIA: '+id_ar);
          this.getdocumentsfiles();
        })
        .catch();
      }
    });
  }
}
