import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkedItems = []

  onChange(item){
    if(screen.width>800)
    {
      if(this.checkedItems.includes(item)) {
        this.checkedItems = this.checkedItems.filter((value)=>value!=item);
        document.querySelector<HTMLElement>('.aceptarcambio2').style.visibility = "hidden";
      } else {
        this.checkedItems.push(item)
        document.querySelector<HTMLElement>('.aceptarcambio2').style.visibility = "visible";
      }
    }
    else
    {
      if(this.checkedItems.includes(item)) {
        this.checkedItems = this.checkedItems.filter((value)=>value!=item);
        document.querySelector<HTMLElement>('.aceptarcambio1').style.visibility = "hidden";
      } else {
        this.checkedItems.push(item)
        document.querySelector<HTMLElement>('.aceptarcambio1').style.visibility = "visible";
      }
    }
  }


}
