import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
    URL = environment.url;

   /* usuarios/create */
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

    rol : any;
  constructor(private route: ActivatedRoute, private navCtrol : NavController, public activatedRoute: ActivatedRoute,private redireccionService: RedireccionService, private userService: UserService, private uiServiceService:UiServiceService ) { 
    const firstParam: string = this.route.snapshot.queryParamMap.get('rol');
    this.rol = firstParam;
    console.log(this.rol);
  }

  ngOnInit() {
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

  create_profile(fUserCol: NgForm){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    // if(!this.imgcolaborador) return this.uiServiceService.alert_info('selecciona una imagen')
    console.log(this.name_1);
    
    if(this.name_1 == undefined || this.name_1 == "") return this.uiServiceService.alert_info('Ingrese sus nombres');
    if(this.lastname_1 == undefined || this.lastname_1 == "") return this.uiServiceService.alert_info('Ingrese su primer apellidos');
    if(this.lastname_2 == undefined || this.lastname_2 == "") return this.uiServiceService.alert_info('Ingrese su segundo apellidos');
    if(this.cargo == undefined || this.cargo == "") return this.uiServiceService.alert_info('Ingrese su segundo apellidos');
    if(this.email == undefined || this.email == "") return this.uiServiceService.alert_info('Ingrese su Email');
    if(this.fecha == undefined || this.fecha == "") return this.uiServiceService.alert_info('Ingrese su fecha');
    if(this.phone == undefined || this.phone == "") return this.uiServiceService.alert_info('Ingrese su telefono');
    if(this.direccion == undefined || this.direccion == "") return this.uiServiceService.alert_info('Ingrese su direccion');
    if(this.inmobiliaria == undefined || this.inmobiliaria == "") return this.uiServiceService.alert_info('seleccione su inmobiliaria');
    if(this.password  == undefined || this.password == "") return this.uiServiceService.alert_info('Ingrese su contraseña');

    
    let formdata = new FormData();
    formdata.append('nombres', this.name_1);
    formdata.append('perfil', this.rol);
    formdata.append('apellido_paterno', this.lastname_1);
    formdata.append('apellido_materno', this.lastname_2);
    formdata.append('direccion', this.direccion);
    formdata.append('telefono', this.phone);
    formdata.append('email', this.email);
    formdata.append('cargo', this.cargo);
    formdata.append('fecha_ingreso', this.fecha);
    formdata.append('empresa', this.inmobiliaria);
    formdata.append('user_img[]', this.imgcolaborador);
    formdata.append('estado', '1');
    if(this.password !== undefined){
      formdata.append('clave', this.password);
    }
    
    this.userService.create_user(formdata)
    .then(resp=>{ 
      console.log(resp['status']);
      if(resp){
        this.navCtrol.navigateRoot('tabs/usuarios/colaborador', { animated : true } );
      }else{
        this.uiServiceService.alert_info(resp['message']);
      }
    })
    .catch();

  }

}
