import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BulletinService } from 'src/app/services/bulletin.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { IndicadorService } from 'src/app/services/indicador.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.page.html',
  styleUrls: ['./stadistics.page.scss'],
})
export class StadisticsPage implements OnInit {

  statistics_data : any ; 
  indicador_data : any ;
  bulletin_data : any;
  URL = environment.url;

  dialogNewStat: boolean = false;
  dialogRemove: boolean = false;
  dialogBulletin: boolean = false;
  dialogNewInd: boolean = false;
  titleDialog: string = "";
  subtitleDialog: string = "";
  titleDialogRemove: string ="";
  isEdited = false;

  /* formulario de estadisticas */
  imagestat: any;
  fileToUploadstat: any;
  titlestat: any;
  descriptionstat: any;
  monthstat: any;
  yearstat: any;
  id_stat: any;

  /* formulario de indicador */
  titleind: any;
  descriptionind: any;
  percentageind: any;
  typeind: any;
  id_ind: any;

  /* bolletines */
  years = [];
  @Output() updateView = new EventEmitter();
  constructor(private uiserviceService: UiServiceService, private statisticsService: StatisticsService, private indicadorService: IndicadorService, private bulletinService: BulletinService ) {
    this.dialogNewStat = false;
    this.dialogNewInd = false;
    this.dialogRemove = false;
    this.dialogBulletin = false;
    this.load_statistics();
    this.load_indicador();
    this.load_bulletin();
  }

  ngOnInit() {
  }

  //Estadisticas
  openDialogStat() {
    this.dialogNewStat = true;
    if(!this.isEdited){
      this.titlestat = '';
      this.imagestat = '';
      this.titlestat = '';
      this.descriptionstat = '';
      this.monthstat = '';
      this.yearstat = '';
    }
  }
  handleFileInput(event){
    this.fileToUploadstat = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUploadstat);
    reader.onload = () => {
        this.imagestat = reader.result;
    };
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
  editStat(objstat){
    this.id_stat = objstat.id;
    this.imagestat = environment.url + '/' + objstat.image;
    this.titlestat = objstat.title;
    this.descriptionstat = objstat.description;
    this.monthstat = objstat.month;
    this.yearstat = objstat.year;
    
    this.isEdited = true;
    this.openDialogStat();
  }
  removeStat(id){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR GRÁFICO";
    this.id_stat = id;

  }
  btn_remove (){
    let formdata = new FormData;
    formdata.append('id', this.id_stat);

    this.statisticsService.del_statistics(formdata)
    .then(resp=>{
      this.closeDialogRemove();
      this.load_statistics();
    })
    .catch();
  }


  /* formulario de indicadores*/
  
  

  //Indicador
  openDialogInd(){
    this.dialogNewInd = true;
    if(!this.isEdited){
      this.id_ind = '';
      this.titleind = '';
      this.descriptionind = '';
      this.percentageind = '';
      this.typeind = '';
  }
}

indedit(fInd: NgForm){
  if(!this.id_ind) return this.uiserviceService.alert_info('no existe id, recargue la pagina');
  if(!this.titleind) return this.uiserviceService.alert_info('Es necesario un titulo');
  if(!this.descriptionind) return this.uiserviceService.alert_info('Es necesario la descripcion');
  if(!this.percentageind) return this.uiserviceService.alert_info('Es necesario el mes');
  if(!this.typeind) return this.uiserviceService.alert_info('Es necesario el año');

  let formdatas = new FormData;
  formdatas.append('id', this.id_ind);
  formdatas.append('title', this.titleind);
  formdatas.append('description', this.descriptionind);
  formdatas.append('percentage', this.percentageind);
  formdatas.append('type', this.typeind);

  this.indicadorService.edit_indicador(formdatas)
  .then(resp=>{
    this.closeDialogind();
    this.load_statistics();
  })
  .catch();
}

closeDialogind() {
  this.dialogNewInd = false;
  this.isEdited = false;
}
  load_indicador(){
    this.indicadorService.get_indicador()
    .then(resp=>{
      this.indicador_data = resp['data'];
    })
    .catch();
  }
  editInd(objstat){
    this.id_stat = objstat.id;
   
    this.titleind = objstat.title;
    this.descriptionind = objstat.description;
    this.percentageind = objstat.percentage;
    this.typeind = objstat.type;
    this.id_ind = objstat.id;
    
    this.isEdited = true;
    this.openDialogInd();
  }

  removeInd(id){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR INDICADOR";
    this.id_ind = id;

  }

  btn_removeind(){
    let formdata = new FormData;
    formdata.append('id', this.id_ind);

    this.indicadorService.new_indicador(formdata)
    .then(resp=>{ 
      this.closeDialogind();
      this.load_indicador();
    })
    .catch();
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

  load_bulletin(){
    this.years = [];
    this.bulletinService.get_bulletin()
    .then(resp=>{
      resp['data'].forEach( data =>{
        // console.log(data.year);
        this.years.push(data.year);
      });
      this.years = [...new Set(this.years)];
      this.bulletin_data = resp['data'];
    })
    .catch(err=>{
      console.log(err);
    });
  }

  //Indicadores
 
  //Dialogo eliminar
  openDialogRemove() {
    this.dialogRemove = true;
  }
  closeDialogRemove() {
    this.dialogRemove = false;
  }
  
}
