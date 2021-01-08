import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BulletinService } from 'src/app/services/bulletin.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss'],
})
export class BulletinListComponent implements OnInit {

  @Input() years_child : any;
  @Input() bulletin_child : any;
  
  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();

  URL = environment.url;
  rol: String;
  constructor(public authService: AuthService ) { 
    this.current_rol();
  }

  ngOnInit() {}
   
  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
  
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


  editItem(id, title, month, year, file) {
    let objbull = {
      id,
      title,
      month,
      year,
      file,
    }
    this.editItemEv.emit(objbull)
  }
  deleteItem(item){
    this.deleteItemEv.emit(item)
  }

}
