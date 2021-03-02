import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RedireccionService } from '../../services/redireccion.service';


@Component({
  selector: 'app-learncenter',
  templateUrl: './learncenter.page.html',
  styleUrls: ['./learncenter.page.scss'],
})
export class LearncenterPage implements OnInit {

  userdata : any;
  constructor(public authService: AuthService, private redireccionService: RedireccionService) { 
    this.current_session();
  }

  ngOnInit() {
  }
  current_session(){
    this.authService.get_data()
    .then((resp : any)=>{
      this.userdata = resp;
      console.log(this.userdata);
    });
  }

  cursos(){
    if(this.userdata.data.rol == 'admin'){
      this.redireccionService.redireccion('/tabs/learning-center/cursos/admin')
    }else{
      this.redireccionService.redireccion('/tabs/learning-center/cursos')
    }
  }

  webinars(){
    if(this.userdata.data.rol == 'admin'){
      this.redireccionService.redireccion('/tabs/learning-center/webinars/admin')
    }else{
      this.redireccionService.redireccion('/tabs/learning-center/webinars')
    }
  }

  certificados(){
    this.redireccionService.redireccion('/tabs/learning-center/certificados')
  }



}
