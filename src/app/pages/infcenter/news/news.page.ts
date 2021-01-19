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
  URL = environment.url;

  dialogReadNews: boolean = false;
  dialogCreateNews: boolean = false;

  /* noticias */
  NewsData : any;
  
  constructor(private redireccionService: RedireccionService,private infcenterService: InfcenterService) { 
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
    this.infcenterService.get_infcenterNews()
    .then(resp=>{
      console.log(resp);
      this.NewsData = resp['data'];
    })
    .catch();
    
  }
  
  openNew_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/news/info/'+ID_NO);
  }
  editNew_(ID_NO){
    console.log('EDITAR NOTA : '+ID_NO);
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
    this.infcenterService.search_infcenter('noticias', buscatxt)
    .then(resp=>{ 
      console.log('Buscar nota : '+buscatxt);
      this.NewsData = resp['data'];
    })
    .catch();
  }

  openDialogInfo(){}
    
 
}
