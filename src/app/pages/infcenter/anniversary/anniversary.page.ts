import { Component, OnInit } from '@angular/core';
import { InfcenterService } from '../../../services/infcenter.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.page.html',
  styleUrls: ['./anniversary.page.scss'],
})
export class AnniversaryPage implements OnInit {

  dialogAnniversaryNew: boolean = false;
  dialogAnniversaryRead: boolean = false;
  constructor(private infcenterService: InfcenterService) { 
    this.getaniversario();
  }

  ngOnInit() {
  }

  readDialogAnniversary(){
    this.dialogAnniversaryRead = true;
  }

  createDialogAnniversary(){
    this.dialogAnniversaryNew = true;
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
