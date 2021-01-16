import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../services/redireccion.service';
import { InfcenterService } from '../../../services/infcenter.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
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
    this.dialogReadNews = true;
  }

  createNews(){
    this.dialogCreateNews= true;
  }

  closeDialogInfo(){
    this.dialogReadNews = false;
    this.dialogCreateNews =false;
  }
  getnoticia(){
    this.infcenterService.get_infcenter()
    .then(resp=>{
      // console.log(resp);
      this.NewsData = resp['data'];
      console.log(this.NewsData);
    })
    .catch();
    
  }

  openDialogInfo(){
    
  }

}
