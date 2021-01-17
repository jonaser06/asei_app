import { Component, OnInit } from '@angular/core';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.page.html',
  styleUrls: ['./fairs.page.scss'],
})
export class FairsPage implements OnInit {

  dialogFeriasRead: boolean = false;
  dialogFeriasCreate: boolean = false;
  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService) { 
    this.getferias();
  }

  ngOnInit() {
  }

  createDialogFerias(){
    // this.dialogFeriasCreate = true;
    this.redireccionService.redireccion('tabs/infcenter/fairs/create')
  }

  readDialogFerias(){
    // this.dialogFeriasRead = true;
    this.redireccionService.redireccion('tabs/infcenter/fairs/info')
  }

  // closeDialogInfo(){
  //   this.dialogFeriasCreate = false;
  //   this.dialogFeriasRead =false;
  // }

  

  getferias(){
    this.infcenterService.get_infcenterFerias()
    .then(rspt=>{
      console.log(rspt);
    })
    .catch();
    
  }

}
