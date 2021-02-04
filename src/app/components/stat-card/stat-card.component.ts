import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {

  @Input() card_child : any;
  
  @Output() editItemEv = new EventEmitter();
  @Output() deleteItemEv = new EventEmitter();
  // @Output() imgFile = new EventEmitter();

  URL = environment.url;
  rol: String;
  constructor(public authService: AuthService) { 
    this.currentRol ();
  }

  ngOnInit( ) { }

  currentRol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
    });
  }
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

  // download(url){
  //   this.imgFile.emit(url);
  // }

}
