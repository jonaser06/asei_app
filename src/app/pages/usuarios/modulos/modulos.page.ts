import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})
export class ModulosPage implements OnInit {

  location : any;
  currentpage : any;
  pages : any;
  constructor() { 
    this.location = window.location.pathname.split("/").pop();
  }

  ngOnInit() {
  }
  onSearchChange(event){

  }
  iraCrear(){
    
  }
  changepage_(event){
    
  }

}
