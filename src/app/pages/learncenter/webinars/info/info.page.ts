import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { LearncenterService } from '../../../../services/learncenter.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  info_curso: any;
  play_list: any;
  player: any;
  rol : String ;
  URL = environment.url
  constructor(private sanitizer:DomSanitizer,public authService: AuthService,private redireccionService: RedireccionService,public activatedRoute: ActivatedRoute, private learncenterService: LearncenterService) 
  {
    this.current_rol();
  }

  ngOnInit(){
    this.get_webinnars();
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
    this.finish();
  }
  closemodal(){
    (document.querySelector('.overlay-1') as HTMLElement).style.display = "none";
  }

  finish(){
    setTimeout(() => {
      (document.querySelector('.overlay-1') as HTMLElement).style.display = "block";
    }, 15000);
  }

  get_webinnars(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.learncenterService.get_webinnars_id(id)
    .then( ( resp:any )=>{
      this.info_curso = resp;
      this.play_list = resp.data.sesiones;
      this.player = this.play_list[0].link.toString();
      this.player = this.player.split("=");
      this.player = 'https://www.youtube.com/embed/'+this.player[1]
      this.player = this.sanitizer.bypassSecurityTrustResourceUrl(this.player);
      // console.log(this.player);
    })
    .catch();
  }

  verclase_(event){
    this.player = event.toString();
    this.player = this.player.split("=");
    this.player = 'https://www.youtube.com/embed/'+this.player[1]
    this.player = this.sanitizer.bypassSecurityTrustResourceUrl(this.player);
    console.log(this.player);
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

  volverWebinars(){
    this.redireccionService.backpage();
  }

  irawebinars(){
    if(this.rol=='admin'){
      this.redireccionService.redireccion('/tabs/learning-center/webinars/admin');
    }else{
      this.redireccionService.redireccion('/tabs/learning-center/webinars');
    }
  }

  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
}
