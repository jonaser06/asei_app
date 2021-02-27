import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.page.html',
  styleUrls: ['./colaborador.page.scss'],
})
export class ColaboradorPage implements OnInit {

  URL = environment.url;
  pages : any;
  UserData:any;
  currentpage : any;
  currentkey : any;
  search : any;

  location : any;
  constructor(private userService: UserService, private redireccionService: RedireccionService, private applicationRef: ApplicationRef) { 
    // this.applicationRef.tick();
    this.get_colaborador();
    this.location = window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    console.log('0. ngOnInit');
  }
  // ionViewDidEnter(){
  //   console.log('1. ionViewDidEnter');
  // }
  // ionViewDidLoad(){
  //   console.log('2. ionViewDidLoad');
  // }
  ionViewWillEnter(){
    this.get_colaborador();
    // console.log('3. ionViewWillEnter');
  }
  // ionViewWillLeave(){
  //   console.log('4. ionViewWillLeave');
  // }
  // ionViewDidLeave(){
  //   console.log('5. ionViewDidLeave');
  // }
  // ionViewWillUnload(){
  //   console.log('6. ionViewWillUnload');  
  // }

  rows = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;


  iraCrear(){
    this.redireccionService.redireccion('/tabs/usuarios/create?rol=colaborador')
  }

  removeuser(id){
    
    this.userService.delete_user(id)
    .then(resp=>{
      this.get_colaborador();

    })
    .catch();
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
    this.userService.get_colaboradorUser(page,input)
    .then(resp=>{
      this.UserData = resp['data'];
      for(let i = 1 ; i <= this.UserData.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.UserData.page;
    });
  }

}
