import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-percent-card',
  templateUrl: './percent-card.component.html',
  styleUrls: ['./percent-card.component.scss'],
})
export class PercentCardComponent implements OnInit {

  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  editItem(item) {
    this.editItemEv.emit(item)
  }
  deleteItem(item){
    this.deleteItemEv.emit(item)
  }

}
