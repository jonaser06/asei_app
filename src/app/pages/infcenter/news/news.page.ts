import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../services/redireccion.service';
import { InfcenterService } from '../../../services/infcenter.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  dialogNewNews: boolean = false;
  constructor(private redireccionService: RedireccionService,private infcenterService: InfcenterService) { 
    this.getnoticia();
  }

  ngOnInit() {
  }

  openDialogNews(){
    this.dialogNewNews = true;
    // this.redireccionService.redireccion('/tabs/infcenter/news/create');
  }

  closeDialogInfo(){
    this.dialogNewNews = false;
  }
  getnoticia(){
    this.infcenterService.get_infcenter()
    .then(rspt=>{
      console.log(rspt);
    })
    .catch();
    
  }

}
