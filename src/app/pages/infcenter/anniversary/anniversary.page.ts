import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from '../../../services/infcenter.service';
import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.page.html',
  styleUrls: ['./anniversary.page.scss'],
})
export class AnniversaryPage implements OnInit {

  dialogAnniversaryNew: boolean = false;
  dialogAnniversaryRead: boolean = false;
  pages : any;
  currentpage : any;
  currentkey : any;

  aniversarioData: any;
  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute) { 
    this.getaniversario();
  }

  ngOnInit() {
  }

  readDialogAnniversary(){
    // this.dialogAnniversaryRead = true;
    this.redireccionService.redireccion('/tabs/infcenter/anniversary/info');
  }

  createDialogAnniversary(){
    // this.dialogAnniversaryNew = true;
    this.redireccionService.redireccion('/tabs/infcenter/anniversary/create');
  }

  // closeDialogInfo(){
  //   this.dialogAnniversaryNew = false;
  //   this.dialogAnniversaryRead =false;
  // }
  getaniversario(){
    let pages = [];
    this.infcenterService.get_infcenterAniversarios()
    .then(rspt=>{
      console.log(rspt);
      this.aniversarioData = rspt['data'];
      for(let i = 1 ; i <= this.aniversarioData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.aniversarioData.page;
    })
    .catch();
    
  }

  changepage_(page){
    let pages = [];
    this.currentkey = ( this.currentkey === undefined ) ? '':this.currentkey;
    this.infcenterService.search_infcenter('aniversarios', page, this.currentkey)
    .then(resp=>{
      this.aniversarioData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.aniversarioData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.aniversarioData.page;
      }
    })
    .catch(err=>{
      console.log('ocurrio un error');
    });
  }

  openAniversarios_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/anniversary/info/'+ID_NO);
  }


  editAniversarios_(ID_NO){
    console.log('EDITAR EVENTOS : '+ID_NO);
    this.redireccionService.redireccion('/tabs/infcenter/anniversary/edit/'+ID_NO);
  }
  removeAniversarios_(ID_NO){
    this.infcenterService.delete_infcenterAniversarios(ID_NO)
    .then(resp=>{ 
      console.log('ELIMINAR EVENTOS: '+ID_NO);
      this.getaniversario();
    })
    .catch();
  }
  
  search_(buscatxt){
    let pages = [];
    this.currentkey = buscatxt;
    this.infcenterService.search_infcenter('aniversarios', 1, buscatxt)
    .then(resp=>{ 
      console.log('Buscar Aniversarios : '+buscatxt);
      this.aniversarioData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.aniversarioData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.aniversarioData.page;
      }
    })
    .catch();
  }
  openDialogInfo(){}


}
