import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../services/redireccion.service';
import { InfcenterService } from '../../../services/infcenter.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private redireccionService: RedireccionService,private infcenterService: InfcenterService) { 

    this.getnoticia();
  }

  ngOnInit() {
  }

  crearnoticia(){
    this.redireccionService.redireccion('/tabs/infcenter/news/create')
  }

  getnoticia(){
    this.infcenterService.get_infcenter()
    .then(rspt=>{
      console.log(rspt);
    })
    .catch();
    
  }

}
