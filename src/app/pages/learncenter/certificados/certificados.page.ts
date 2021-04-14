import { Component, OnInit } from '@angular/core';

import { RedireccionService } from '../../../services/redireccion.service';
import { CertificadosService } from '../../../services/certificados.service';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
})
export class CertificadosPage implements OnInit {

  user : any;
  URL = environment.url;
  pages : any;
  CertificadosData:any;
  currentpage : any;
  currentkey : any;
  search : any;
  constructor(private authservice : AuthService,private certificadosService: CertificadosService,private redireccionService: RedireccionService) {
    this.authservice.get_data().then( resp => {
      this.user = resp;

      this.getcertificates()
    })
   }

  ngOnInit() {
   
  }
  volverLearn(){
    this.redireccionService.backpage();
  }
  changepage_(page){
    let pages = [];
    this.currentkey = ( this.currentkey === undefined ) ? '':this.currentkey;
    this.certificadosService.getCertificates(this.user.data.user_id, page, this.currentkey)
    .then(resp=>{
      this.CertificadosData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.CertificadosData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.CertificadosData.page;
      }
    })
    .catch(err=>{
      console.log('ocurrio un error');
    });
  }
  
  getcertificates(){
    let pages = [];
    this.certificadosService.getCertificates( this.user.data.user_id)
    .then(resp=>{
      console.log(resp);
      this.CertificadosData = resp['data'];
      for(let i = 1 ; i <= this.CertificadosData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.CertificadosData.page;
    })
    .catch();
  }


  openCertificados_(ID_CO){
    this.redireccionService.redireccion('/tabs/learning-center/certificados/info/'+ID_CO);
  }



}
