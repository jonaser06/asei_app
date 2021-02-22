import { Component, OnInit } from '@angular/core';
import { mockData } from "./mock/mockdata.testdata";
import { UserService } from '../../../services/user.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-admin-colaborador',
  templateUrl: './admin-colaborador.page.html',
  styleUrls: ['./admin-colaborador.page.scss'],
})
export class AdminColaboradorPage implements OnInit {

  URL = environment.url;
  pages : any;
  UserData:any;
  currentpage : any;
  currentkey : any;
  search : any;

  constructor(private userService: UserService) { 
    this.get_colaborador();
  }

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

  onSearchChange(event){
    let input = event.detail.value;
    this.search = input;
    let pages = [];
    this.userService.get_colaboradorUser(1,input) 
    .then(resp=>{
      this.UserData = resp['data'];
      for(let i = 1 ; i <= this.UserData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.UserData.page;
    });
  }

  get_colaborador(){
    let pages = [];
    this.userService.get_colaboradorUser()
    .then(resp=>{
      console.log();
      this.UserData = resp['data'];
      for(let i = 1 ; i <= this.UserData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.UserData.page;
      

    })
    .catch();
  }

  changepage_(page){
    let pages = [];
    let input;
    if(this.search === 'undefined'){
      input  = '';
    }else{
      input  = this.search;
    }
    this.userService.get_colaboradorUser(page,input)
    .then(resp=>{
      this.UserData = resp['data'];
      for(let i = 1 ; i <= this.UserData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.UserData.page;
    });
  }


}
