import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export class CardItemsComponent implements OnInit {

  @Input() news_child : any;

  @Output() idNews = new EventEmitter();

  URL = environment.url;
  
  constructor() { }

  ngOnInit() {}

  openNew(ID_NO){
    this.idNews.emit(ID_NO);
  }

}
