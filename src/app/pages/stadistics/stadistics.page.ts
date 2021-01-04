import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.page.html',
  styleUrls: ['./stadistics.page.scss'],
})
export class StadisticsPage implements OnInit {

  dialogNewStat: boolean = false;
  dialogRemove: boolean = false;
  dialogBulletin: boolean = false;
  dialogIndicator: boolean = false;
  titleDialog: string = "";
  subtitleDialog: string = "";
  titleDialogRemove: string ="";
  isEdited = false;

  /* formulario de estadisticas */
  fileToUpload: File = null;

  constructor() {
    this.dialogNewStat = false;
    this.dialogRemove = false;
    this.dialogBulletin = false;
  }

  ngOnInit() {
  }

  //Estadisticas
  openDialogStat() {
    this.dialogNewStat = true;
  }
  handleFileInput(files: FileList){
    console.log(this.fileToUpload = files.item(0));
  }

  stat(fStat: NgForm){
    
    console.log(fStat.valid);
  }
  closeDialogStat() {
    this.dialogNewStat = false;
    this.isEdited = false;
  }
  editStat(item){
    this.isEdited = true;
    this.openDialogStat();
  }
  removeStat(item){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR GRÁFICO";
  }

  // Boletin
  openDialogBulletin() {
    this.dialogBulletin = true;
  }
  closeDialogBulletin() {
    this.dialogBulletin = false;
    this.isEdited = false;
  }
  editBulletin(item){
    this.isEdited = true;
    this.openDialogBulletin();
  }
  removeBulletin(item){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR BOLETÍN";
  }

  //Indicadores
  openDialogIndicator() {
    this.dialogIndicator = true;
  }
  closeDialogIndicator() {
    this.dialogIndicator = false;
    this.isEdited = false;
  }
  editIndicator(item){
    this.isEdited = true;
    this.openDialogIndicator();
  }
  removeIndicator(){
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
