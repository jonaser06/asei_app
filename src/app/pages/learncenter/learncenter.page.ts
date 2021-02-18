import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../services/redireccion.service';


@Component({
  selector: 'app-learncenter',
  templateUrl: './learncenter.page.html',
  styleUrls: ['./learncenter.page.scss'],
})
export class LearncenterPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  cursos(){
    this.redireccionService.redireccion('/tabs/learning-center/cursos')
  }

  webinars(){
    this.redireccionService.redireccion('/tabs/learning-center/webinars')
  }

  certificados(){
    this.redireccionService.redireccion('/tabs/learning-center/certificados')
  }



}
