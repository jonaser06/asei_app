import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import { RedireccionService } from '../../../../services/redireccion.service';
import { LearncenterService } from '../../../../services/learncenter.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  info_curso: any;
  URL = environment.url
  constructor(public authService: AuthService,private redireccionService: RedireccionService,public activatedRoute: ActivatedRoute, private learncenterService: LearncenterService ) { 
    
  }

  ngOnInit(){
    this.get_curso();
    document.querySelector('.playlist_tab').classList.add("display-none");
    document.querySelector('.resumen_tab').classList.remove("display-none");
    document.querySelector('.objetivos_tab').classList.add("display-none");
    document.querySelector('.capacitadores_tab').classList.add("display-none");
    window.onresize = function(event) {
      let playerw = window.innerWidth;
      if(playerw > 990){
        document.querySelector('.playlist_tab').classList.add("display-none");
        document.querySelector('.resumen_tab').classList.remove("display-none");
        document.querySelector('.objetivos_tab').classList.add("display-none");
        document.querySelector('.capacitadores_tab').classList.add("display-none");
      }else if(playerw < 990){
        document.querySelector('.playlist_tab').classList.remove("display-none");
        document.querySelector('.resumen_tab').classList.add("display-none");
        document.querySelector('.objetivos_tab').classList.add("display-none");
        document.querySelector('.capacitadores_tab').classList.add("display-none");
      }
    }
  }

  get_curso(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.learncenterService.get_learncenterCursosID(id)
    .then(resp=>{
      this.info_curso = resp;
    })
    .catch();
  }

  playlist(){
    document.querySelector('.playlist_tab').classList.remove("display-none");
    document.querySelector('.resumen_tab').classList.add("display-none");
    document.querySelector('.objetivos_tab').classList.add("display-none");
    document.querySelector('.capacitadores_tab').classList.add("display-none");
  }
  resumen(){
    document.querySelector('.playlist_tab').classList.add("display-none");
    document.querySelector('.resumen_tab').classList.remove("display-none");
    document.querySelector('.objetivos_tab').classList.add("display-none");
    document.querySelector('.capacitadores_tab').classList.add("display-none");
  }
  objetivos(){
    document.querySelector('.playlist_tab').classList.add("display-none");
    document.querySelector('.resumen_tab').classList.add("display-none");
    document.querySelector('.objetivos_tab').classList.remove("display-none");
    document.querySelector('.capacitadores_tab').classList.add("display-none");
  }
  capacitadores(){
    document.querySelector('.playlist_tab').classList.add("display-none");
    document.querySelector('.resumen_tab').classList.add("display-none");
    document.querySelector('.objetivos_tab').classList.add("display-none");
    document.querySelector('.capacitadores_tab').classList.remove("display-none");
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

}
