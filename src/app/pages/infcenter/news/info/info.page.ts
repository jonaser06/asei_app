import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  NewData : any;
  NewsData : any;
  Title : String = 'Más noticias';
  URL = environment.url;

  constructor(private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private infcenterService: InfcenterService) { 
    this.get_news();
    this.more_news();
  }

  ngOnInit() {
  }
  volverNews(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/fairs')
    this.redireccionService.backpage();
  }

  get_news(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.infcenterService.get_infcenterNewsID(id)
    .then(resp=>{
      this.NewData = resp;
      this.NewData = this.NewData.data;
      console.log(this.NewData);
    })
    .catch();
  }
  more_news(){
    this.infcenterService.get_infcenterNews()
    .then(resp=>{
      this.NewsData = resp['data']['notes'];
    })
    .catch();
  }

  openDialogInfo(){}

}
