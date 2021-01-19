import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {


  @Output() buscatxt = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  search(){
    let input = (<HTMLInputElement>document.querySelector('.buscatxt')).value;
    this.buscatxt.emit(input);
  }

}
