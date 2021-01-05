import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BulletinService } from 'src/app/services/bulletin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss'],
})
export class BulletinListComponent implements OnInit {

  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();

  bulletin_data : any;
  URL = environment.url;
  constructor(private bulletinService: BulletinService) {
    this.load_bulletin();
   }

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

  load_bulletin(){
    this.bulletinService.get_bulletin()
    .then(resp=>{

      resp['data'].forEach( data =>{

      });
      // console.log(resp);
      this.bulletin_data = resp['data'];
    })
    .catch();
  }

  editItem(item) {
    this.editItemEv.emit(item)
  }
  deleteItem(item){
    this.deleteItemEv.emit(item)
  }

}
