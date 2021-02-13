import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

}
