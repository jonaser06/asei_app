import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.page.html',
  styleUrls: ['./anniversary.page.scss'],
})
export class AnniversaryPage implements OnInit {

  dialogAnniversaryNew: boolean = false;
  dialogAnniversaryRead: boolean = false;
  constructor() { }

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
}
