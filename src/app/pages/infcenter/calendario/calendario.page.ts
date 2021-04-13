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
}
