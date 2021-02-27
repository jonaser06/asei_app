import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BulletinService } from 'src/app/services/bulletin.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { IndicadorService } from 'src/app/services/indicador.service';
import { AuthService } from 'src/app/services/auth.service';
// import { File } from '@ionic-native/file/ngx';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from 'src/environments/environment';
import { RedireccionService } from '../../services/redireccion.service';
import { InfcenterService } from '../../services/infcenter.service';
import { IonSlides } from '@ionic/angular';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.page.html',
  styleUrls: ['./stadistics.page.scss'],
  providers: [DatePipe]
})
export class StadisticsPage implements OnInit {

  statistics_data : any ; 
  indicador_data : any ;
  bulletin_data : any;
  URL = environment.url;

  /*paginador*/

  currentkey : any;
  currentpage : any;
  pages : any;


  dialogNewStat: boolean = false;
  dialogRemove: boolean = false;
  dialogBulletin: boolean = false;
  dialogNewInd: boolean = false;
  titleDialog: string = "";
  tipostat: string = "";
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
  idbull: any;
  titlebull: any;
  monthbull: any;
  yearbull: any;
  filebull: any;
  filebull_: any;

  /* eliminar dialogs */
  stat_rmv = false;
  bull_rmv = false;
  indi_rmv = false;
  
  // rol
  rol : String ;
  @Output() updateView = new EventEmitter();

  mydate : any;

  constructor(
    private datePipe: DatePipe,
    public authService: AuthService, 
    private uiserviceService: UiServiceService, 
    private statisticsService: StatisticsService, 
    private indicadorService: IndicadorService, 
    private bulletinService: BulletinService, 
    private infcenterService: InfcenterService,
    // private transfer: FileTransfer, 
    // private file: File
    ) {
    this.dialogNewStat = false;
    this.dialogNewInd = false;
    this.dialogRemove = false;
    this.dialogBulletin = false;

    this.load_statistics();
    this.load_indicador();
    this.load_bulletin();
    this.current_rol();
    
  }

  slideConfig : any;

  slideOpts={
    initialSlide: 1,
    speed: 400,
    slidesPerView: Math.floor (window.innerWidth / 400),
    breakpoints: {
      200: {
        
        slidesPerView: 1,
        spaceBetween: 30
      
      },
      600: {
        
        slidesPerView: 2,
        spaceBetween: 30
      
      },
      800: {
        
          slidesPerView: 3,
          spaceBetween: 20
        
      },
      1200:{
          slidesPerView: 4,
          spaceBetween: 10
      }
    }
  };
  
  @ViewChild(IonSlides) slides: IonSlides;


  ngOnInit() { }

  nextSlide() {
    this.slides.slideNext();
   }

  prevSlide() {
    this.slides.slidePrev();
  }

  // sesion data 

  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
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
    this.tipostat=this.fileToUploadstat.type.split("/", 1);
    if(this.tipostat != "image") 
    {
      this.fileToUploadstat=false;
      return this.uiserviceService.alert_info('Selecciona un formato válido');
    }
    reader.onload = () => {
        this.imagestat = reader.result;
    };
  }
  adjuntfile(event){
    this.filebull = event.target.files[0];
    if(this.filebull.type.split("/", 2)[1] != "pdf"){
      this.filebull=false;
      return this.uiserviceService.alert_info('Selecciona un archivo de formato PDF');
    }
    this.filebull_=this.filebull.name;
    console.log(this.filebull.name);
  }
  stat(fStat: NgForm){
    if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(this.titlestat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario un titulo');
    if(this.descriptionstat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(this.monthstat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario el mes');
    if(this.yearstat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario el año');

    let formdata = new FormData;
    formdata.append('title', this.titlestat);
    formdata.append('description', this.descriptionstat);
    formdata.append('month', this.monthstat);
    formdata.append('year', this.yearstat);
    formdata.append('image', this.fileToUploadstat);

    this.statisticsService.new_statistics(formdata)
    .then(resp=>{
      /* push notification */

      /* fin push notification */
      this.closeDialogStat();
      this.load_statistics();
      this.fileToUploadstat = null;
    })
    .catch();
  }

  statedit(fStat: NgForm){
    if(this.id_stat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('no existe id, recargue la pagina');
    // if(!this.fileToUploadstat) return this.uiserviceService.alert_info('selecciona una imagen');
    if(this.titlestat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario un titulo');
    if(this.descriptionstat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(this.monthstat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario el mes');
    if(this.yearstat.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario el año');
    
    this.mydate = this.datePipe.transform(this.mydate, 'yyyy-MM-dd');
    console.log(this.mydate);

    let formdata = new FormData;
    formdata.append('id', this.id_stat);
    formdata.append('title', this.titlestat);
    formdata.append('description', this.descriptionstat);
    formdata.append('month', this.monthstat);
    formdata.append('year', this.yearstat);
    if(this.fileToUploadstat!==undefined) formdata.append('image', this.fileToUploadstat);

    this.statisticsService.edit_statistics(formdata)
    .then(resp=>{
      /* push notification */
      // let push = {'titulo': this.titlestat,'descripcion': this.descriptionstat,'fecha': ,'destino':'stadistics', 'categoria': 'stadistics'}
      /* fin push notification */
      this.closeDialogStat();
      this.load_statistics();
    })
    .catch();
  }

  load_statistics(){
    let pages = [];
    this.statisticsService.get_statistics()
    .then(resp=>{
      this.statistics_data = resp['data']['content'];
      for(let i = 1 ; i <= resp['data'].pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = resp['data'].page;
      
    })
    .catch();
  }

  closeDialogStat() {
    this.dialogNewStat = false;
    this.isEdited = false;
    this.fileToUploadstat=false;
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
    this.stat_rmv = true;
  }

  btn_remove (){
    if(this.stat_rmv){
      let formdata = new FormData;
      formdata.append('id', this.id_stat);
  
      this.statisticsService.del_statistics(formdata)
      .then(resp=>{
        this.closeDialogRemove();
        this.load_statistics();
        this.stat_rmv = false;
      })
      .catch();
    }else if(this.indi_rmv){
      let formdata = new FormData;
      formdata.append('id', this.id_ind);
  
      this.indicadorService.del_indicador(formdata)
      .then(resp=>{ 
        this.closeDialogRemove();
        this.load_indicador();
        this.indi_rmv = false;
      })
      .catch();
    }else if(this.bull_rmv){
      let formdata = new FormData;
      formdata.append('id', this.idbull);
  
      this.bulletinService.del_bulletin(formdata)
      .then(resp=>{ 
        this.closeDialogRemove();
        this.load_bulletin();
        this.bull_rmv = false;
      })
      .catch();
    }else{
      console.log('ocurrio un error');
    }
  }

  //Indicador
  openDialogInd(){
    this.dialogNewInd = true;
    if(!this.isEdited){
      this.id_ind = '';
      this.titleind = '';
      this.descriptionind = '';
      this.percentageind = '';
      this.typeind = 'incremento';
    }
  }

  indedit(fInd: NgForm){
    if(!this.id_ind) return this.uiserviceService.alert_info('no existe id, recargue la pagina');
    if( this.titleind.replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario un titulo');
    if( this.descriptionind.replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if( this.percentageind.toString().replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario el porcentaje');
    if( this.typeind.replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario el tipo');

    let formdatas = new FormData;
    formdatas.append('id', this.id_ind);
    formdatas.append('title', this.titleind);
    formdatas.append('description', this.descriptionind);
    formdatas.append('percentage', this.percentageind);
    formdatas.append('type', this.typeind);

    this.indicadorService.edit_indicador(formdatas)
    .then(resp=>{
      this.closeDialogind();
      this.load_indicador();
    })
    .catch();
  }

  closeDialogind() {
    this.dialogNewInd = false;
    this.isEdited = false;
  }

  load_indicador(){
    this.slideConfig = {"slidesToScroll": 4,"slidesToShow": 4,"margin":"25px","dots":true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll:4
        }
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll:4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]};
    this.indicadorService.get_indicador()
    .then(resp=>{
      this.indicador_data = resp['data']['content'];
    })
    .catch();
  }

  ind(fInd: NgForm){
    console.log(this.percentageind);
    if(this.titleind.replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario un titulo');
    if(this.descriptionind.replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario la descripcion');
    if(this.percentageind.toString().replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario registrar el porcentaje');
    if(this.typeind.replace(/\s/g, "") === "" ) return this.uiserviceService.alert_info('Es necesario el tipo');

    let formdatas = new FormData;
    formdatas.append('title', this.titleind);
    formdatas.append('description', this.descriptionind);
    formdatas.append('percentage', this.percentageind);
    formdatas.append('type', this.typeind);

    this.indicadorService.new_indicador(formdatas)
    .then(resp=>{
      this.closeDialogind();
      this.load_indicador();
    })
    .catch();
  }

  editInd(objind){

    this.id_ind = objind.id;
    this.titleind = objind.title;
    this.descriptionind = objind.description;
    this.percentageind = objind.percentage;
    this.typeind = objind.type;

    this.isEdited = true;
    this.openDialogInd();
  }

  removeInd(id){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR INDICADOR";
    this.id_ind = id;
    this.indi_rmv = true;
  }

  // Boletin
  openDialogBulletin() {
    this.dialogBulletin = true;
    this.filebull = '';
    if(!this.isEdited){
      this.monthbull = '';
      this.yearbull = '';
      this.titlebull = '';
    }
  }
  closeDialogBulletin() {
    this.dialogBulletin = false;
    this.isEdited = false;
  }
  editBulletin(objbull){
    this.idbull = objbull.id;
    this.titlebull = objbull.title;
    this.monthbull = objbull.month;
    this.yearbull = objbull.year;
    this.filebull = objbull.file;
    this.filebull_ = objbull.file;
    this.filebull_ = this.filebull_.split('/');
    this.filebull_ = this.filebull_[this.filebull_.length - 1 ];
    this.isEdited = true;
    this.openDialogBulletin();

  }
  removeBulletin(id){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR BOLETÍN";
    this.idbull = id;
    this.bull_rmv = true;
  }

  load_bulletin(){
    this.years = [];
    this.bulletinService.get_bulletin()
    .then(resp=>{
      resp['data']['content'].forEach( (data, index) =>{
        data.file = environment.url + '/' + data.file;
        // console.log(index);
        this.years.push(data.year);
      });
      this.years = [...new Set(this.years)];
      this.years.sort((a, b) => b - a );
      // console.log(this.years.sort((a, b) => a - b ));
      this.bulletin_data = resp['data']['content'];
    })
    .catch(err=>{
      console.log(err);
    });
  }

  bulletedit(fbullet: NgForm){
    if(this.idbull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('No se encontro el id del boletin, actualizar');
    // if(this.filebull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario un archivo pdf');
    if(this.monthbull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario el mes');
    if(this.yearbull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario año');
    if(this.titlebull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario un titulo');
    let formdata = new FormData;
    formdata.append('id', this.idbull);
    formdata.append('title', this.titlebull);
    formdata.append('month', this.monthbull);
    formdata.append('year', this.yearbull);
    formdata.append('file', this.filebull);

    this.bulletinService.edit_bulletin(formdata)
    .then(resp=>{ 
      this.closeDialogBulletin();
      this.load_bulletin();
    })
    .catch();

  }
  bullet(fbullet: NgForm){
    if(!this.filebull) return this.uiserviceService.alert_info('Es necesario un archivo pdf');
    if(this.monthbull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario el mes');
    if(this.yearbull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario año');
    if(this.titlebull.replace(/\s/g, "") === "") return this.uiserviceService.alert_info('Es necesario un titulo');

    let formdata = new FormData;
    formdata.append('title', this.titlebull);
    formdata.append('month', this.monthbull);
    formdata.append('year', this.yearbull);
    formdata.append('file', this.filebull);

    this.bulletinService.new_bulletin(formdata)
    .then(resp=>{ 
      this.closeDialogBulletin();
      this.load_bulletin();
      this.filebull == null; 
    })
    .catch();

  }

  //Indicadores
 
  //Dialogo eliminar
  openDialogRemove() {
    this.dialogRemove = true;
  }
  closeDialogRemove() {
    this.dialogRemove = false;
  }
  
  changepage_(page){
    let pages = [];
    this.statisticsService.get_statistics(page)
    .then(resp=>{
      this.statistics_data = resp['data']['content'];
      for(let i = 1 ; i <= resp['data'].pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = resp['data'].page;
      
    })
    .catch();
  }

}
