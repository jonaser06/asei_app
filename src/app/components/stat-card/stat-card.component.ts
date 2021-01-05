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

  editItem(item) {
    this.editItemEv.emit(item)
  }
  deleteItem(item){
    this.deleteItemEv.emit(item)
  }

}
