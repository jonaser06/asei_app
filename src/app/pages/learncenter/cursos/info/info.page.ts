import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RedireccionService } from '../../../../services/redireccion.service';
import { LearncenterService } from '../../../../services/learncenter.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { CertificadosService } from '../../../../services/certificados.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
 user: any;
  info_curso: any;
  play_list: any;
  player: any;
  rol : String ;
  URL = environment.url

  constructor(private certificadosService : CertificadosService,private authservice : AuthService,private sanitizer:DomSanitizer,public authService: AuthService,private redireccionService: RedireccionService,public activatedRoute: ActivatedRoute, private learncenterService: LearncenterService ) { 
    this.current_rol();
  }

  ngOnInit(){
    this.authservice.get_data().then( resp => this.user = resp)

    this.get_curso();
    console.log(this.info_curso);
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

  closemodal(){
    (document.querySelector('.overlay-1') as HTMLElement).style.display = "none";
  }

  sendInfoCertificate () {
    
    let { user_id , nombres , apellidos  }               = this.user.data;
    let { ID_CO , duracion , titulo,fecha_publicacion ,capacitadores } = this.info_curso.data;
    const formCertificate = new FormData();

    const nombreFirst   = nombres.trim().split(' ')[0]
    const apellidoFirst = apellidos.trim().split(' ')[0]
    const capacitador = capacitadores[0].nombre;

    ID_CO = parseInt(ID_CO)
    user_id = parseInt(user_id)
    formCertificate.append('user',`${nombreFirst} ${apellidoFirst}`);
    formCertificate.append('curse_name', titulo);
    formCertificate.append('curse_inicio', fecha_publicacion);
    formCertificate.append('curse_duration',duracion);
    formCertificate.append('capacitador',capacitador);
    // formCertificate.append('capacitador',duracion);
    this.certificadosService.newCertificate( ID_CO ,user_id , formCertificate )
    .then( resp => {
      console.log(resp);
    }).catch( err => console.log(err))
    
  }
  finish(value){
    if(value){
     
      this.sendInfoCertificate()

      setTimeout(() => {
        (document.querySelector('.overlay-1') as HTMLElement).style.display = "block";
      }, 5000);
    }
  }

  get_curso(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.learncenterService.get_learncenterCursosID(id)
    .then( ( resp:any )=>{
      this.info_curso = resp;
      console.log(this.info_curso)

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
    // console.log(this.player);
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

  iraCursos(){
    if(this.rol=='admin'){
      this.redireccionService.redireccion('/tabs/learning-center/cursos/admin');
    }else{
      this.redireccionService.redireccion('/tabs/learning-center/cursos');
    }
  }

  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
}
