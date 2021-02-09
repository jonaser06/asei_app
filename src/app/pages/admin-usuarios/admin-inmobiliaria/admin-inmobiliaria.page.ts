import { Component, OnInit } from '@angular/core';
import { mockData } from "./mock/mockdata.testdata";

@Component({
  selector: 'app-admin-inmobiliaria',
  templateUrl: './admin-inmobiliaria.page.html',
  styleUrls: ['./admin-inmobiliaria.page.scss'],
})
export class AdminInmobiliariaPage implements OnInit {

  constructor() { }
  rows = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  
  public columns = [
    { prop: "nombre", name: "Name" },
    { prop: "cargo", name: "Cargo" },
    { prop: "correo", name: "Correo" },
    { prop: "fecha", name: "Fecha"},
    { prop: "estado", name: "Estado" },
    { prop: "modulo", name: "Modulo" },
    { prop: "opciones", name: "Opciones" }
  ];

  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this.rows = mockData;
    setInterval(() => {
      this.loadingIndicator = false;
    }, 4000);
  }
}
