import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sesion-get',
  templateUrl: './sesion-get.component.html',
  styleUrls: ['./sesion-get.component.scss'],
})
export class SesionGetComponent implements OnInit {

  @Input() sesion : any;
  @Input() index : any;

  @Output() indx = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  btn_rmv(index){
    this.indx.emit(index);
  }

}
