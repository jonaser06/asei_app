import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../services/redireccion.service';
import { InfcenterService } from '../../../services/infcenter.service';
import { environment } from 'src/environments/environment';

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
  

  dialogReadNews: boolean = false;
  dialogCreateNews: boolean = false;

  /* noticias */
  NewsData : any;
  OldData : any;
  
  constructor(private redireccionService: RedireccionService, private infcenterService: InfcenterService) { 
    this.getnoticia();
    this.getOldnoticia();
  
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
  getOldnoticia(){
    let pages = [];
    this.infcenterService.get_infcenterNews(1,9,true)
    .then(resp=>{
      console.log(resp);
      this.OldData = resp['data'];
      for(let i = 1 ; i <= this.OldData.pages; i++ ){ pages.push(i)}
      this.pagesOld = pages;
      this.currentpageOld = this.OldData.page;
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
  changepageOld_(page){
    let pages = [];
    this.currentkeyOld = ( this.currentkeyOld === undefined ) ? '':this.currentkeyOld;
    this.infcenterService.search_infcenter('noticias', page, this.currentkeyOld)
    .then(resp=>{
      this.OldData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.OldData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpageOld = this.OldData.page;
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
    this.infcenterService.delete_infcenterNews(ID_NO)
    .then(resp=>{ 
      console.log('ELIMINAR NOTA : '+ID_NO);
      this.getnoticia();
    })
    .catch();
  }
  search_(buscatxt){
    let pages = [];
    this.currentkey = buscatxt;
    this.currentkeyOld = buscatxt;
    this.infcenterService.search_infcenter('noticias', 1, buscatxt)
    .then(resp=>{ 
      console.log('Buscar nota : '+buscatxt);
      this.OldData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.OldData.pages; i++ ){pages.push(i)}
        this.pagesOld = pages;
        this.currentpageOld = this.OldData.page;
      }
    })
    .catch();
  }

  openDialogInfo(){}
    
 
}
