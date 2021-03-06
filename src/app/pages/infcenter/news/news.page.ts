import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../services/redireccion.service';
import { InfcenterService } from '../../../services/infcenter.service';
import { environment } from 'src/environments/environment';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news_data : any;
  pages : any;
  pagesOld : any;
  currentpage : any;
  currentpageOld : any;
  URL = environment.url;
  currentkey : any;
  currentkeyOld : any;
  buscatxt : any;
  search: any;
  

  dialogReadNews: boolean = false;
  dialogCreateNews: boolean = false;

  /* noticias */
  NewsData : any;
  OldData : any;
  
  constructor(private redireccionService: RedireccionService, private infcenterService: InfcenterService, private uiServiceService: UiServiceService) { 
    this.getnoticia();
  
  }

  ngOnInit() {
  }

  

  openDialogNews(){
    // this.dialogReadNews = true;
    this.redireccionService.redireccion('/tabs/infcenter/news/info');
  }

  createNews(){
    // this.dialogCreateNews= true;
    this.redireccionService.redireccion('/tabs/infcenter/news/create');
  }

  // closeDialogInfo(){
  //   this.dialogReadNews = false;
  //   this.dialogCreateNews =false;
  // }

  getnoticia(){
    let pages = [];
    this.infcenterService.get_infcenterNews()
    .then(resp=>{
      this.NewsData = resp['data'];
      for(let i = 1 ; i <= this.NewsData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.NewsData.page;

    })
    .catch();
    
  }

  changepage_(page){
    let pages = [];
    this.currentkey = ( this.currentkey === undefined ) ? '':this.currentkey;
    this.infcenterService.search_infcenter('noticias', page, this.currentkey)
    .then(resp=>{
      this.NewsData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.NewsData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.NewsData.page;
      }
    })
    .catch(err=>{
      console.log('ocurrio un error');
    });
  }
  
  openNew_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/news/info/'+ID_NO);
  }
  editNew_(ID_NO){
    console.log('EDITAR NOTA : '+ID_NO);
    // this.redireccionService.redireccion('/tabs/infcenter/news/info/'+ID_NO);
    this.redireccionService.redireccion('/tabs/infcenter/news/edit/'+ID_NO);
  }
  removeNew_(ID_NO){
    this.uiServiceService.presentAlertConfirm('Eliminar noticia','Se eliminará la noticia, ¿Quieres continuar?').then((res)=>{
      let resp = res.data.resp;
      if(resp){
    this.infcenterService.delete_infcenterNews(ID_NO)
    .then(resp=>{ 
      console.log('ELIMINAR NOTA : '+ID_NO);
      this.getnoticia();
    })
    .catch();
      }
    });
  }
  search_(buscatxt){
    let pages = [];
    this.currentkey = buscatxt;
    this.infcenterService.search_infcenter('noticias', 1, buscatxt)
    .then(resp=>{ 
      console.log('Buscar nota : '+buscatxt);
      this.NewsData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.NewsData.pages; i++ ){pages.push(i)}
        this.pages = pages;
      }
    })
    .catch();
  }

  volverInfo(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/fairs')
    this.redireccionService.backpage();
  }

  openDialogInfo(){}
    
 
}
