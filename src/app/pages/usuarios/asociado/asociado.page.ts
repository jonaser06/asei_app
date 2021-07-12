import { ApplicationRef, Component, OnInit } from '@angular/core';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { UiServiceService } from '../../../services/ui-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-asociado',
  templateUrl: './asociado.page.html',
  styleUrls: ['./asociado.page.scss'],
})
export class AsociadoPage implements OnInit {

  URL = environment.url;
  rol;
  
  email;
  pages : any;
  UserData:any;
  currentpage : any;
  currentkey : any;
  search : any;
  resp : any;

  location : any;
  constructor(private authService: AuthService, private userService: UserService, private redireccionService: RedireccionService, private applicationRef: ApplicationRef, private UiServiceService : UiServiceService) { 
    this.get_asociado();
    this.location = window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    this.current_session();
  }

  rows = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  current_session(){
    this.authService.get_data()
    .then(resp=>{
      console.log(resp);
      this.email = resp['data']['email']
      this.rol = resp['data']['rol']
    });
  }


  iraCrear(){
    this.redireccionService.redireccion('/tabs/usuarios/create?rol=asociado')
  }

  irapersonal(id){
    this.redireccionService.redireccion('/tabs/usuarios/personalfiles/'+id);
  }

  removeuser(id){
    this.UiServiceService.presentAlertConfirm('Eliminar usuario','¿Estás seguro que desea eliminar este usuario?').then((res)=>{
    let resp = res.data.resp;
    if(resp){
      this.userService.delete_user(id)
      .then(resp=>{
        this.get_asociado();
      })
      .catch();
      }
    })
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
