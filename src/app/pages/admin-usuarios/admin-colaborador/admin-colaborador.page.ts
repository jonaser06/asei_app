import { Component, OnInit } from '@angular/core';
import { mockData } from "./mock/mockdata.testdata";
import { UserService } from '../../../services/user.service';
import { environment } from '../../../../environments/environment.prod';
import { RedireccionService } from '../../../services/redireccion.service';

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

  constructor(private userService: UserService, private redireccionService: RedireccionService) { 
    this.get_colaborador();
  }

  rows = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  
  ngOnInit() {
    ;
  }


  iraCrear(){
    this.redireccionService.redireccion('/tabs/admin/admin-colaborador/create')
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
