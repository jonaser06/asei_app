import { Component, OnInit } from '@angular/core';
import { InfcenterService } from '../../../services/infcenter.service';
import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.page.html',
  styleUrls: ['./anniversary.page.scss'],
})
export class AnniversaryPage implements OnInit {

  dialogAnniversaryNew: boolean = false;
  dialogAnniversaryRead: boolean = false;
  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService) { 
    this.getaniversario();
  }

  ngOnInit() {
  }

  readDialogAnniversary(){
    // this.dialogAnniversaryRead = true;
    this.redireccionService.redireccion('/tabs/infcenter/anniversary/info');
  }

  createDialogAnniversary(){
    // this.dialogAnniversaryNew = true;
    this.redireccionService.redireccion('/tabs/infcenter/anniversary/create');
  }

  closeDialogInfo(){
    this.dialogAnniversaryNew = false;
    this.dialogAnniversaryRead =false;
  }
  getaniversario(){
    this.infcenterService.get_infcenterAniversarios()
    .then(rspt=>{
      console.log(rspt);
    })
    .catch();
    
  }

}
