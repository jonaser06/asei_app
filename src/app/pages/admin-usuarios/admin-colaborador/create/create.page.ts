import { Component, OnInit } from '@angular/core';
import { RedireccionService } from '../../../../services/redireccion.service';
import { environment } from '../../../../../environments/environment.prod';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { UiServiceService } from '../../../../services/ui-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  
  perfilCol : any;
  nombres : any;
  ap_pat : any;
  ap_mat : any;
  direccion : any;
  telefono : any;
  email : any;
  password : any;
  cargo : any;
  fecha_ingreso : any;
  empresa : any;
  imgcolaborador : any;
  imagencol : any;

  constructor(private redireccionService: RedireccionService, private userService: UserService, private uiServiceService:UiServiceService) { }

  ngOnInit() {
  }

  volverCursos(){
    this.redireccionService.backpage();
  }

  /* imagen del colaborador */
  img_colaborador(event){
    this.imgcolaborador = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.imgcolaborador);
    reader.onload = () => {
        this.imagencol = reader.result;
    };
  }

  /* añadir curso */
  add_colaborador(fUserCol: NgForm){

    // if(!this.imgcolaborador) return this.uiServiceService.alert_info('selecciona una imagen');
    if(!this.nombres) return this.uiServiceService.alert_info ('Es necesario un titulo');
    if(!this.ap_pat) return this.uiServiceService.alert_info('Es necesario el resumen');
    if(!this.ap_mat) return this.uiServiceService.alert_info('Es necesario el texto');
    if(!this.direccion) return this.uiServiceService.alert_info('Es necesario la direccion de enlace');
    if(!this.telefono) return this.uiServiceService.alert_info('Es necesario la fecha de publicacion');
    if(!this.email) return this.uiServiceService.alert_info('Es necesario la hora de publicacion');
    // if(!this.password) return this.uiServiceService.alert_info('Es necesario el resumen');
    if(!this.cargo) return this.uiServiceService.alert_info('Es necesario el texto');
    if(!this.fecha_ingreso) return this.uiServiceService.alert_info('Es necesario la direccion de enlace');
    if(!this.empresa) return this.uiServiceService.alert_info('Es necesario la fecha de publicacion');
    
    let formdata = new FormData();
    formdata.append('perfil', 'colaborador');
    formdata.append('nombres', this.nombres);
    formdata.append('ap_pat', this.ap_pat);
    formdata.append('ap_mat', this.ap_mat);
    formdata.append('direccion', this.direccion);
    formdata.append('telefono', this.telefono);
    formdata.append('email', this.email);
    formdata.append('password', this.password);
    formdata.append('cargo', this.cargo);
    formdata.append('fecha_ingreso', this.fecha_ingreso);
    formdata.append('empresa', this.empresa);
    formdata.append('img_learn[]', this.imgcolaborador);
    
    this.userService.create_userCol(formdata)
    .then(resp=>{ 
      console.log('SE CREO LA NOTA');
      this.redireccionService.backpage();
    })
    .catch();

  }
}