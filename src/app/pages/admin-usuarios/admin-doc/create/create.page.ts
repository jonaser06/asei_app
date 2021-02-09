import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  dialogNewStat: boolean = false;
  dialogRemove: boolean = false;
  dialogIndicator: boolean = false;
  isEdited = false;

  
  ngOnInit() {
  }

  constructor(public authService: AuthService) {
  this.dialogNewStat = false;
    this.dialogRemove = false;
  }

  //Indicadores
  openDialogIndicator() {
    this.dialogIndicator = true;
  }
  closeDialogIndicator() {
    alert("cierra pe");
    this.dialogIndicator = false;
    this.isEdited = false;
  }
  editIndicator(item){
    this.dialogNewStat = true;
    this.isEdited = true;
    this.openDialogIndicator();
  }

  openDialogStat() {
    this.dialogNewStat = true;
  }
  closeDialogStat() {
    this.dialogNewStat = false;
    this.isEdited = false;
  }

}
