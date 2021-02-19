import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebinarsService } from 'src/app/services/webinars.service';
import { environment } from 'src/environments/environment';
import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  webinars_data : any;
  pages: any;
  currentpage: any;
  URL_BASE = environment.url;

  constructor(private redireccionService: RedireccionService,
              private webinarsService: WebinarsService,
              private router: Router) { }

  ngOnInit() {
    this.load_webinars()
  }

  volverWebinars(){
    this.redireccionService.backpage();
  }

  iraCrear(){
    this.redireccionService.redireccion('/tabs/learning-center/webinars/crear/0')
  }

  load_webinars(){
    let pages = [];
    this.webinarsService.get_cursos()
    .then(resp=>{
      this.webinars_data = resp['data']['contenido'];
      for(let i = 1 ; i <= resp['data'].pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = resp['data'].page;
    
    })
    .catch();
  }

  changepage_(page){
    let pages = [];
    this.webinarsService.get_cursos(page)
    .then(resp=>{
      this.webinars_data = resp['data']['content'];
      for(let i = 1 ; i <= resp['data'].pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = resp['data'].page;
    })
    .catch();
  }

  updateWebinar(webinar: any){
    this.router.navigate(['/tabs/learning-center/webinars/crear', webinar.ID_CO])
  }

  deleteWebinar(webinar: any){
    this.webinarsService.delete_curso(webinar.ID_CO)
    .then(resp=>{
      if(resp['status']){
        this.load_webinars();
      }else{
        console.log('No se pudo eliminar ', resp['message']);
      }
    })
    .catch();
  }

  

}
