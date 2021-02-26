import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.page.html',
  styleUrls: ['./asociado.page.scss'],
})
export class AsociadoPage implements OnInit {

  URL = environment.url;
  pages : any;
  UserData:any;
  currentpage : any;
  currentkey : any;
  search : any;

  location : any;
  constructor(private userService: UserService, private redireccionService: RedireccionService, private applicationRef: ApplicationRef) { 
    this.get_asociado();
    this.location = window.location.pathname.split("/").pop();
  }

  ngOnInit() {
  }

  rows = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;


  iraCrear(){
    this.redireccionService.redireccion('/tabs/usuarios/create')
  }


  onSearchChange(event){
    let input = event.detail.value;
    this.search = input;
    let pages = [];
    this.userService.get_asociadoUser(1,input) 
    .then(resp=>{
      this.UserData = resp['data'];
      for(let i = 1 ; i <= this.UserData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.UserData.page;
    });
  }

  get_asociado(){
    let pages = [];
    this.userService.get_asociadoUser()
    .then(resp=>{
      console.log(resp);
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
    this.userService.get_asociadoUser(page,input)
    .then(resp=>{
      this.UserData = resp['data'];
      for(let i = 1 ; i <= this.UserData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.UserData.page;
    });
  }

}
