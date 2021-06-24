import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { InfcenterService } from '../../../services/infcenter.service';
import { RedireccionService } from '../../../services/redireccion.service';
import { ActivatedRoute } from '@angular/router';
import { UiServiceService } from '../../../services/ui-service.service';

@Component({
  selector: 'app-boletin-legal',
  templateUrl: './boletin-legal.page.html',
  styleUrls: ['./boletin-legal.page.scss'],
})
export class BoletinLegalPage implements OnInit {

  URL = environment.url;
 
  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute, private uiServiceService: UiServiceService) { 
  }

  ngOnInit() {
  }
  
  volverInfo(){
    this.redireccionService.backpage();
  }
  openDialogInfo(){}

}
