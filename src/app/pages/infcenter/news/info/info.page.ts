import { Component, OnInit } from '@angular/core';
import { RedireccionService } from 'src/app/services/redireccion.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }
  volvernews(){
    // this.dialogCreateNews= true;
    this.redireccionService.redireccion('/tabs/infcenter/news')
  }

}
