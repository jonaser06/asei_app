import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatisticsService } from 'src/app/services/statistics.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.page.html',
  styleUrls: ['./stadistics.page.scss'],
})
export class StadisticsPage implements OnInit {

  statistics_data : any;
  URL = environment.url;

  dialogNewStat: boolean = false;
  dialogRemove: boolean = false;
  dialogBulletin: boolean = false;
  dialogIndicator: boolean = false;
  titleDialog: string = "";
  subtitleDialog: string = "";
  titleDialogRemove: string ="";
  isEdited = false;

  /* formulario de estadisticas */
  fileToUploadstat: any;
  titlestat: any;
  descriptionstat: any;
  monthstat: any;
  yearstat: any;
  id_stat: any;

  @Output() updateView = new EventEmitter();
  constructor(private uiserviceService: UiServiceService, private statisticsService: StatisticsService ) {
    this.dialogNewStat = false;
    this.dialogRemove = false;
    this.dialogBulletin = false;
    this.load_statistics();
  }

  ngOnInit() {
  }

  //Estadisticas
  openDialogStat() {
    this.dialogNewStat = true;
  }
  handleFileInput(files: FileList){
    this.fileToUploadstat = files.item(0);
  }

  stat(fStat: NgForm){
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titlestat) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.descriptionstat) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(!this.monthstat) return this.uiserviceService.alert_info('Es necesario el mes');
    if(!this.yearstat) return this.uiserviceService.alert_info('Es necesario el año');

    let formdata = new FormData;
    formdata.append('title', this.titlestat);
    formdata.append('description', this.descriptionstat);
    formdata.append('month', this.monthstat);
    formdata.append('year', this.yearstat);
    formdata.append('image', this.fileToUploadstat);

    this.statisticsService.new_statistics(formdata)
    .then(resp=>{ 
      console.log(resp);
      this.closeDialogStat();
      this.load_statistics();
    })
    .catch();
  }

  statedit(fStat: NgForm){
    if(!this.id_stat) return this.uiserviceService.alert_info('no existe id, recargue la pagina');
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(!this.titlestat) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(!this.descriptionstat) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(!this.monthstat) return this.uiserviceService.alert_info('Es necesario el mes');
    if(!this.yearstat) return this.uiserviceService.alert_info('Es necesario el año');

    let formdata = new FormData;
    formdata.append('id', this.id_stat);
    formdata.append('title', this.titlestat);
    formdata.append('description', this.descriptionstat);
    formdata.append('month', this.monthstat);
    formdata.append('year', this.yearstat);
    formdata.append('image', this.fileToUploadstat);

    this.statisticsService.edit_statistics(formdata)
    .then(resp=>{
      console.log(resp);
      this.closeDialogStat();
      this.load_statistics();
    })
    .catch();
  }

  load_statistics(){
    this.statisticsService.get_statistics()
    .then(resp=>{
      this.statistics_data = resp['data'];
    })
    .catch();
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
