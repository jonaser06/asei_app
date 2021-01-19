import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from 'src/app/services/infcenter.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.page.html',
  styleUrls: ['./fairs.page.scss'],
})
export class FairsPage implements OnInit {

  dialogFeriasRead: boolean = false;
  dialogFeriasCreate: boolean = false;

  feriasData: any;
  constructor(private infcenterService: InfcenterService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute) { 
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
      this.feriasData = rspt['data'];
    })
    .catch();
    
  }
  
  openNew_(ID_NO){
    this.redireccionService.redireccion('/tabs/infcenter/fairs/info/'+ID_NO);
  }

  openDialogInfo(){}
    
  


}
