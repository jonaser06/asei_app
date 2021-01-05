import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {

  @Input() card_child : any;
  
  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();

  URL = environment.url;

  constructor() { }

  ngOnInit( ) { }

  editItem(id, title, description, image, month, year) {
    let objstat = {
      id,
      title,
      description,
      image,
      month,
      year
    }
    this.editItemEv.emit(objstat);
  }
  deleteItem(id){
    this.deleteItemEv.emit(id);
  }

}
