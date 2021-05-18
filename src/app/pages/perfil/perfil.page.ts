import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RedireccionService } from 'src/app/services/redireccion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userdata: any;
  title: any;
  URL = environment.url;
  constructor(private authService: AuthService, private redireccionService: RedireccionService, private navCtrol : NavController) { 
    this.current_session();
  }

  ngOnInit() {
  }

  current_session(){
    this.authService.get_data()
    .then(( resp : any )=>{
      if(resp.data.rol == 'admin'){
        this.title = 'ADMINISTRADOR';
      }else if(resp.data.rol == 'asociado'){
        this.title = 'ASOCIADO';
      }else if(resp.data.rol == 'colaborador'){
        this.title = 'COLABORADOR';
      }else if(resp.data.rol == 'admin asociado'){
        this.title = 'ADMINISTRADOR ASOCIADO';
      }
      let nombres = resp.data.nombres + ' ' + resp.data.apellidos;
      let img = this.URL + '/' + resp.data.imagenes[0].RUTA;
      this.userdata = {
        nombre: nombres,
        cargo: resp.data.cargo,
        correo: resp.data.email,
        fecha: resp.data.fecha_ingreso,
        telefono: resp.data.telefono,
        direccion: resp.data.direccion,
        image: img
      }
      
    });
  }

  edituser(id){
    this.navCtrol.navigateRoot('tabs/usuarios/edit/'+id, { animated : true } );
  }

  irapersonales(id){
    this.redireccionService.redireccion('/tabs/usuarios/personalfiles/'+id);
  }

  volverCursos(){
    this.redireccionService.backpage();
  }
}
