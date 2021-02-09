import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  eventosData: any;
  URL = environment.url;
  NewsData : any;
  Title : String = 'Más ferias';

  constructor(private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private infcenterService: InfcenterService) { 
    this.get_Eventos()
    this.more_news()
  }

  ngOnInit() {
  }

  volverEventos(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/eventos')
    this.redireccionService.backpage();
  }

  get_Eventos(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.infcenterService.get_infcenterEventosID(id)
    .then(resp=>{
      this.eventosData = resp;
      this.eventosData = this.eventosData.data;
      console.log(this.eventosData);
    })
    .catch();
  }

  more_news(){
    this.infcenterService.get_infcenterEventos()
    .then(resp=>{
      this.NewsData = resp['data']['notes'];
    })
    .catch();
  }


  openDialogInfo(){}
    


}
