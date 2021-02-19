import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trainer-get',
  templateUrl: './trainer-get.component.html',
  styleUrls: ['./trainer-get.component.scss'],
})
export class TrainerGetComponent implements OnInit {

  @Input() trainer : any;
  @Input() index : any;

  @Output() indx = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  btn_rmv(index){
    this.indx.emit(index);
  }
  

}
