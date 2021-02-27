import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trainer-get',
  templateUrl: './trainer-get.component.html',
  styleUrls: ['./trainer-get.component.scss'],
})
export class TrainerGetComponent implements OnInit {

  @Input() trainer : any;
  @Input() index : any;
  URL = environment.url;

  @Output() indx = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  btn_rmv(index, ID_CA){
    let objrm = {index,ID_CA};
    this.indx.emit(objrm);
  }
  

}
