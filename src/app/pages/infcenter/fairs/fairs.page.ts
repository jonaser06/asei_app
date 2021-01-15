import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.page.html',
  styleUrls: ['./fairs.page.scss'],
})
export class FairsPage implements OnInit {

  dialogFeriasRead: boolean = false;
  dialogFeriasCreate: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  createDialogFerias(){
    this.dialogFeriasCreate = true;
  }

  readDialogFerias(){
    this.dialogFeriasRead = true;
  }

  closeDialogInfo(){
    this.dialogFeriasCreate = false;
    this.dialogFeriasRead =false;
  }

}
