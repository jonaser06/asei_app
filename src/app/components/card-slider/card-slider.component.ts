import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../services/redireccion.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {}

  openDialogNews(){
    // this.dialogReadNews = true;
    this.redireccionService.redireccion('/tabs/infcenter/news/info');
  }

}
