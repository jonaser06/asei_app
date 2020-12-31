import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss'],
})
export class BulletinListComponent implements OnInit {

  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  
  toggleSubMenu(indexParameter: number | string){
    const list = document.querySelectorAll(
      ".bulletin-list > .item"
    );
    list.forEach((item, index) => {
      const clasesItem = item.classList;
      if (index == indexParameter && clasesItem.length === 1) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  editItem(item) {
    this.editItemEv.emit(item)
  }
  deleteItem(item){
    this.deleteItemEv.emit(item)
  }

}
