import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../../services/redireccion.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

  ngOnInit() {
  }

  volverFerias(){
    // this.dialogCreateNews= true;
    this.redireccionService.redireccion('/tabs/infcenter/fairs')
  }

}
