import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfcenterService } from '../../../services/infcenter.service';
import { RedireccionService } from '../../../services/redireccion.service';
import { CalendarioService } from '../../../services/calendario.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  calendarioData : any;
  pages : any;
  currentpage : any;
  fechaIniciotx : any;
  fechaFintx : any;
  


  constructor(private calendarioService: CalendarioService, private redireccionService: RedireccionService, public activatedRoute: ActivatedRoute) {
    this.getevent();
   }

  ngOnInit() {
  }

  volverInfo(){
    
    this.redireccionService.backpage();
  }

  getevent(){
    let pages = [];
    this.calendarioService.get_calendario()
    .then(rspt=>{
      console.log(rspt);
      this.calendarioData = rspt['data'];
      for (let i = 1 ; i <= this.calendarioData.pages; i++ ){pages.push(i)} 
      this.pages = pages;
      this.currentpage = this.calendarioData.page;
    })
    .catch();
  } 
  fechaInicioTxt(event){
    let fecha = new Date(event.detail.value);
    // this.fechaIniciotx = new Date(event.detail.value);
    this.fechaIniciotx =  fecha.getFullYear() + "-" + ('0'+(fecha.getMonth()+1)).slice(-2) + "-" + fecha.getDate();
  }
  fechaFinTxt(event){
    let fecha = new Date(event.detail.value);
    // this.fechaFintx = new Date(event.detail.value);
    this.fechaFintx = fecha.getFullYear() + "-" + ('0'+(fecha.getMonth()+1)).slice(-2) + "-" + fecha.getDate();
  }

  search_( ){
    let pages = [];
    this.calendarioService.search_calendario(this.fechaIniciotx, this.fechaFintx )
    .then(resp=>{ 
      console.log('Buscar Eventos : '+ this.fechaIniciotx +' '+ this.fechaFintx );
      console.log(resp);
      this.calendarioData = resp['data'];
      if(resp['status']){
        for(let i = 1 ; i <= this.calendarioData.pages; i++ ){pages.push(i)}
        this.pages = pages;
        this.currentpage = this.calendarioData.page;
      }
    })
    .catch();
  }
  openCalendario_(event){

  }

  changepage_(event){

  }
}
