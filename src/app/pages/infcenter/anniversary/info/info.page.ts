import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  dialogCalificacion: boolean = false;
  isEdited = false;
  aniversarioData: any;
  links : any[];
  URL = environment.url;
  NewsData : any;
  Title : String = 'Más Aniversarios';
  Section : String = 'anniversary';

  constructor(private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private infcenterService: InfcenterService) { 
    this.get_Aniversario();
    this.more_news();
    this.links = [];
  }

  ngOnInit() {
  }

  volverAnniversary(){
    this.redireccionService.backpage();
  }

  
  //Info
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


  get_Aniversario(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.infcenterService.get_infcenterAniversariosID(id)
    .then((resp: any)=>{
      this.aniversarioData = resp;
      this.aniversarioData = this.aniversarioData.data;
      this.links = resp.data.link.split(',');
      console.log(this.aniversarioData);
    })
    .catch();
  }

  more_news(){
    this.infcenterService.get_infcenterAniversarios()
    .then(resp=>{
      this.NewsData = resp['data']['notes'];
    })
    .catch();
  }
}


