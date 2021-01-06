import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IndicadorService } from 'src/app/services/indicador.service';

@Component({
  selector: 'app-percent-card',
  templateUrl: './percent-card.component.html',
  styleUrls: ['./percent-card.component.scss'],
})
export class PercentCardComponent implements OnInit {

  @Input() card_ind : any;

  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();

  URL = environment.url;

  constructor() { }

  ngOnInit() {}

  editItem( id, title, description, percentage, type ) {
    let objind = {
      id,
      title,
      description,
      percentage,
      type,
    }

    this.editItemEv.emit(objind);
  }

  deleteItem(id){
    this.deleteItemEv.emit(id);
  }
}
