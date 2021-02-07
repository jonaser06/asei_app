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

  feriasData : any;
  URL = environment.url;

  constructor(private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private infcenterService: InfcenterService) { 
    this.get_Ferias()}
    

  ngOnInit() {
  }

  volverFerias(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/fairs')
    this.redireccionService.backpage();
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

  openDialogInfo(){}
    

}
