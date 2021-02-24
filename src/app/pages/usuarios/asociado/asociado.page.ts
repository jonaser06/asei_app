import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.page.html',
  styleUrls: ['./asociado.page.scss'],
})
export class AsociadoPage implements OnInit {

  location : any;
  constructor() { 
    this.location = window.location.pathname.split("/").pop();
  }

  ngOnInit() {
  }

}
