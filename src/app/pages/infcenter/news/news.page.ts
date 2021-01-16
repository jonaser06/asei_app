import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../services/redireccion.service';
import { InfcenterService } from '../../../services/infcenter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news_data : any;
  URL = environment.url;

  dialogReadNews: boolean = false;
  dialogCreateNews: boolean = false;

<<<<<<< HEAD
  /* formulario de noticias */

  ID_NO : any;
  titulo : any;
  resumen : any;
  texto : any;
  fecha_inicio : any;
  fecha_fin : any;
  seccion : any;
  files : any;


=======
  /* noticias */
  NewsData : any;
>>>>>>> 19ce0e8b3a1c1384bef55297a064ea90987c42b4
  
  constructor(private redireccionService: RedireccionService,private infcenterService: InfcenterService) { 
    this.getnoticia();
  }

  ngOnInit() {
  }

  openDialogNews(){
    this.dialogReadNews = true;
  }

  createNews(){
    this.dialogCreateNews= true;
  }

  closeDialogInfo(){
    this.dialogReadNews = false;
    this.dialogCreateNews =false;
  }
  getnoticia(){
    this.infcenterService.get_infcenter()
    .then(resp=>{
      // console.log(resp);
      this.NewsData = resp['data'];
      console.log(this.NewsData);
    })
    .catch();
    
  }
  // Noticias
  
  editnews(objnews){
    
    this.ID_NOnews = objnews.ID_NO;
    this.titulonews = objnews.titulo;
    this.resumennews = objnews.resumen;
    this.textonews = objnews.texto;
    this.fecha_inicionews = objnews.fecha_inicio;
    this.fecha_finnews = objnews.fecha_fin;
    this.seccionnews = objnews.seccion;
    this.filesnews = objnews.files;

    this.isEdited = true;
    this.openDialogNews();

  }

  removenews(item){
    this.openDialogRemove();
    this.titleDialogRemove = "ELIMINAR BOLETÍN";
    this.bull_rmv = true;
  }

  load_news(){
    this.years = [];
    this.bulletinService.get_bulletin()
    .then(resp=>{
      resp['data'].forEach( (data, index) =>{
        data.file = environment.url + '/' + data.file;
        // console.log(index);
        this.years.push(data.year);
      });
      this.years = [...new Set(this.years)];
      this.bulletin_data = resp['data'];
    })
    .catch(err=>{
      console.log(err);
    });
  }

  bulletedit(fbullet: NgForm){

  }
  bullet(fbullet: NgForm){
    
  }

}
