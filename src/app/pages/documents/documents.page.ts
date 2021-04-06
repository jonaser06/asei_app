import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { RedireccionService } from '../../services/redireccion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  URL = environment.url;
  pages: any;
  DocumentsTiposData: any;
  currentpage : any;
  currentkey : any;
  visible: any;
  search : any;
  rol : String ;

  constructor(public authService: AuthService, private redireccionService: RedireccionService, private documentsService: DocumentsService, private uiServiceService: UiServiceService) { 
    this.getdocumentstipos();
    this.current_rol();
    this.visible = true;
  }

  ngOnInit() {
  }

  onSearchChange(event){
    let input = event.detail.value;
    this.search = input;
    let pages = [];
    this.documentsService.get_documentsTipos(1,input) 
    .then(resp=>{
      this.DocumentsTiposData = resp['data'];
      for(let i = 1 ; i <= this.DocumentsTiposData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.DocumentsTiposData.page;
    });
  }

  getdocumentstipos(){
    let pages = [];
    this.documentsService.get_documentsTipos()
    .then(resp=>{
      console.log();
      this.DocumentsTiposData = resp['data'];
      for(let i = 1 ; i <= this.DocumentsTiposData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.DocumentsTiposData.page;
    })
    .catch();
  }

  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }

  changepage_(page){
    let pages = [];
    let input;
    if(this.search === 'undefined'){
      input  = '';
    }else{
      input  = this.search;
    }
    this.documentsService.get_documentsTipos(page,input)
    .then(resp=>{
      this.DocumentsTiposData = resp['data'];
      for(let i = 1 ; i <= this.DocumentsTiposData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.DocumentsTiposData.page;
    });
  }
  
  editDocumentsTipo_(ID_NO){
    console.log('EDITAR CATEGORIA : '+ID_NO);
    this.redireccionService.redireccion('/tabs/documents/edit/'+ID_NO);
  }

  openDocumentsTipos_(id_ar){
    this.redireccionService.redireccion('/tabs/documents/files/'+id_ar)
  }

  iraCrear(){
    this.redireccionService.redireccion('/tabs/documents/crear');
  }

  removeTipo_(id_ar){
    this.uiServiceService.presentAlertConfirm('Eliminar Categoría','Al eliminar la categoría, se eliminarán también los archivos pertenecientes a esta, ¿Quieres continuar?').then((res)=>{
      let resp = res.data.resp;
      if(resp){
        this.documentsService.delete_tipo(id_ar)
        .then(resp=>{ 
          console.log('ELIMINAR CATEGORIA : '+id_ar);
          this.getdocumentstipos();
        })
        .catch();
      }
    });
  }
}
