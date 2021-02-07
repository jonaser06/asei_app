import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

   ngOnInit(){
   
   }

   dialogRemove: boolean = false;
  dialogCalificacion: boolean = false;
  titleDialog: string = "";
  subtitleDialog: string = "";
  titleDialogRemove: string ="";
  isEdited = false;

  constructor(public authService: AuthService) { 
    this.dialogRemove = false;
  }

  watchVideo(n) {
    let contentVideo = document.querySelectorAll('.all-session .content-session .content-video');

    if (contentVideo[n].getAttribute('style') == null) {
      contentVideo[n].setAttribute('style','height: 15em;');
    } else if (contentVideo[n].getAttribute('style') == 'height: 0em;') {
      contentVideo[n].setAttribute('style','height: 15em;');
    } else {
      contentVideo[n].setAttribute('style','height: 0em;');
    }
  }

  //Info
  openDialogCalificacion() {
    this.dialogCalificacion = true;
  }

  closeDialogCalificacion() {
    this.dialogCalificacion = false;
    this.isEdited = false;
  }

  editCalificacion(item){
    this.isEdited = true;
    this.openDialogCalificacion();
  }

  removeCalificacion(){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR INDICADOR";
  }

  //Dialogo eliminar
  openDialogRemove() {
    this.dialogRemove = true;
  }

  closeDialogRemove() {
    this.dialogRemove = false;
  }



}
