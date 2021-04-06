import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card-documents-files',
  templateUrl: './card-documents-files.component.html',
  styleUrls: ['./card-documents-files.component.scss'],
})
export class CardDocumentsfilesComponent implements OnInit {

  @Input() documentsfiles_child : any;
  @Input() visible : any;

  @Output() idDocumentsfiles = new EventEmitter();
  @Output() idDocumentsfilesR = new EventEmitter();
  
  rol : String ;

  URL = environment.url;

  constructor(public authService: AuthService, private platform: Platform, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private documentsService: DocumentsService, private router: Router) { 
    this.current_rol();
  }

  ngOnInit() {}
  
  editDocumentsfile(ID_DOC){
    this.idDocumentsfiles.emit(ID_DOC);
  }

  removeFile(ID_DOC){
    this.idDocumentsfilesR.emit(ID_DOC);
  }
  
  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
}
