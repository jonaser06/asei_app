import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vincularcalendario',
  templateUrl: './vincularcalendario.component.html',
  styleUrls: ['./vincularcalendario.component.scss'],
})
export class VincularcalendarioComponent implements OnInit {

  pepe = false;
  @Output() calendar = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  togglevalue(event){
    
    if(this.pepe) {
      this.pepe = false;
    }else{
      this.pepe = true;
    }
    // console.log(this.pepe);
    this.calendar.emit(this.pepe);
  }

}
