import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {

  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();

  statistics_data : any;
  URL = environment.url;

  constructor(private stadisticsService: StatisticsService) { }

  ngOnInit( ) {
    this.load_statistics();
  }

  load_statistics(){
    this.stadisticsService.get_statistics()
    .then(resp=>{
      this.statistics_data = resp['data'];
    })
    .catch();
  }

  updatedata(){
    console.log('recibido');
  }

  editItem(item) {
    this.editItemEv.emit(item)
  }
  deleteItem(item){
    this.deleteItemEv.emit(item)
  }

}
