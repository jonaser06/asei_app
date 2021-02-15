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

  dialogCalificacion: boolean = false;
  isEdited = false;
  feriasData : any;
  NewsData : any;
  URL = environment.url;
  Title : String = 'Más ferias';

  constructor(private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private infcenterService: InfcenterService) { 
    this.get_Ferias()
    this.more_news()
  }
    

  ngOnInit() {
  }

  volverFerias(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/fairs')
    this.redireccionService.backpage();
  }


  openDialogCalificacion() {
    this.dialogCalificacion = true;
  }

  closeDialogCalificacion() {
    this.dialogCalificacion = false;
    this.isEdited = false;
  }

  onRateChange(event) {
    console.log('Your rate:', event);
  }

  get_Ferias(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.infcenterService.get_infcenterFeriasID(id)
    .then(resp=>{
      this.feriasData = resp;
      this.feriasData = this.feriasData.data;
      console.log(this.feriasData);
    })
    .catch();
  }

  more_news(){
    this.infcenterService.get_infcenterFerias()
    .then(resp=>{
      this.NewsData = resp['data']['notes'];
    })
    .catch();
  }

  openDialogInfo(){}
    

}
