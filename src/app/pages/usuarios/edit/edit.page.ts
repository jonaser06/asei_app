import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  URL = environment.url;
  

  /* usuarios/edit */
  name_1 : any;
  lastname_1 : any;
  lastname_2 : any;
  cargo : any;
  email : any;
  fecha : any;
  phone : any;
  direccion : any;
  inmobiliaria : any;
  password : any;

  imgcolaborador : any;
  imagencol : any;

  rol:any;
  isAdmin  : boolean = false;
  currentUser: any;
  user_id : any;
  @ViewChild('msg') msg : ElementRef;

  constructor( private alertController : UiServiceService,private authservice : AuthService,private navCtrol : NavController, public activatedRoute: ActivatedRoute,private redireccionService: RedireccionService, private userService: UserService, private uiServiceService:UiServiceService) { 
    
    
    this.get_user();
    this.authservice.get_data().then( resp => {
      this.currentUser =  resp['data']['ID_US'] == this.user_id ? true : false
      this.currentUser =  '1608532826' == this.user_id ? true : false
    })
    this.imgcolaborador = '';
  }

  ngOnInit() {
    this.current_session();
    console.log('0. ngOnInit');
  }


  current_session(){
    this.authservice.get_data()
    .then(resp=>{
      console.log(resp);
      this.email = resp['data']['email']
      this.rol = resp['data']['rol']
    });
  }

  subirimg(){ (document.querySelector('.img_') as HTMLElement).click(); }

  volverCursos(){
    this.redireccionService.backpage();
  }

  img_colaborador(event){
    this.imgcolaborador = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imgcolaborador);
    reader.onload = () => {
        this.imagencol = reader.result;
    };
  }

  get_user(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user_id = id;
    this.userService.get_userService(id)
    .then(resp=>{ 
      this.name_1     = resp['data']['NOMBRES'];
      this.lastname_1 = resp['data']['APELLIDO_PATERNO'];
      this.lastname_2 = resp['data']['APELLIDO_MATERNO'];
      this.cargo      = resp['data']['CARGO'];
      this.email      = resp['data']['EMAIL'];
      this.fecha      = resp['data']['FECHA_INGRESO'];
      this.phone      = resp['data']['TELEFONO'];
      this.direccion  = resp['data']['DIRECCION'];
      this.inmobiliaria = resp['data']['EMPRESA'];
      this.rol = resp['data']['TIPO'];
      this.isAdmin = resp['data']['admin_asociado'] == 1 ? true :false;

      this.imagencol =  this.URL + '/' + resp['data']['imagenes'][0]['RUTA'];

      
    })
    .catch();
  }


  update_profile(fUserCol: NgForm){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    // if(!this.imgcolaborador) return this.uiServiceService.alert_info('selecciona una imagen');
    if(this.name_1.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese sus nombres');
    if(this.lastname_1.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su primer apellidos');
    if(this.lastname_2.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su segundo apellidos');
    if(this.cargo.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su segundo apellidos');
    if(this.email.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su Email');
    if(this.fecha.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su fecha');
    if(this.phone.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su telefono');
    if(this.direccion.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('Ingrese su direccion');
    if(this.inmobiliaria.toString().replace(/\s/g, "") === "") return this.uiServiceService.alert_info('seleccione su inmobiliaria');
    if(this.password == undefined || this.password == "") return this.uiServiceService.alert_info('Ingrese su contraseña');

    let formdata = new FormData();
    if( this.cargo == 'asociado') {
      const adminAsociado = this.isAdmin ? '1': '0';
      formdata.append('admin_asociado',adminAsociado);
    }
    formdata.append('nombres', this.name_1);
    formdata.append('apellido_paterno', this.lastname_1);
    formdata.append('apellido_materno', this.lastname_2);
    formdata.append('direccion', this.direccion);
    formdata.append('telefono', this.phone);
    formdata.append('email', this.email);
    formdata.append('cargo', this.cargo);
    formdata.append('fecha_ingreso', this.fecha);
    formdata.append('empresa', this.inmobiliaria);
    formdata.append('user_img[]', this.imgcolaborador);
    if(this.password !== undefined){
      formdata.append('clave', this.password);
    }
    
    this.userService.update_user(id, formdata)
    .then(resp=>{ 
      console.log(this.rol)
      if(this.rol =='ADMIN') {
        this.navCtrol.navigateRoot('tabs/usuarios/colaborador', { animated : true } );
        return
      }
      this.alertController.alert_info( 'Se actualizaron sus datos correctamente');
    })
    .catch();

  }
  
  changePerfil () {
    this.isAdmin = !this.isAdmin 
    const $mensaje:HTMLElement = this.msg.nativeElement
    $mensaje.textContent = this.isAdmin ?  'Este asociado tendra privilegios de administrador de asociados':''
}
}
