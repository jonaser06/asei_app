import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss'],
})
export class PaginadorComponent implements OnInit {

  @Input() paginas : any;
  @Input() pagina : any;

  @Output() number_page = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  changepage(page){
    this.number_page.emit(page);
  }
}
