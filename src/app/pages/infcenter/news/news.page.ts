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
  
  constructor(private redireccionService: RedireccionService,private infcenterService: InfcenterService) { 
    this.getnoticia();
  }

  ngOnInit() {
  }

  openDialogNews(){
    this.dialogReadNews = true;
    // this.redireccionService.redireccion('/tabs/infcenter/news/create');
  }

  createNews(){
    this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/news/create');
  }

  closeDialogInfo(){
    this.dialogReadNews = false;
    this.dialogCreateNews =false;
  }
  getnoticia(){
    this.infcenterService.get_infcenter()
    .then(rspt=>{
      console.log(rspt);
    })
    .catch();
    
  }

  openDialogInfo(){
    
  }

}
