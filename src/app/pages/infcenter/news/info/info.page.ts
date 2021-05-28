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

  dialogCalificacion: boolean = false;
  isEdited = false;
  NewData : any;
  links : any[];
  NewsData : any;
  Title : String = 'Más noticias';
  Section : String = 'news';
  URL = environment.url;

  constructor(private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private infcenterService: InfcenterService) { 
    this.get_news();
    this.more_news();
    this.links = [];
  }

  ngOnInit() {
  }
  volverNews(){
    // this.dialogCreateNews= true;
    // this.redireccionService.redireccion('/tabs/infcenter/fairs')
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

  get_news(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.infcenterService.get_infcenterNewsID(id)
    .then((resp: any)=>{

      this.NewData = resp;
      this.NewData = this.NewData.data;

      this.links = resp.data.link.split(',');
      // console.log(this.NewData); 
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
