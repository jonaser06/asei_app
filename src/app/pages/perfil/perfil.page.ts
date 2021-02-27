import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RedireccionService } from 'src/app/services/redireccion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userdata: any;
  title: any;
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
      
      let nombres = resp.data.nombres;
      this.userdata = {
        nombre: nombres,
        cargo: 'Administrador',
        correo: 'admin@asei.com',
        fecha: '27/12/2019',
        telefono: 931081386,
        direccion: 'Lima'
      }

      // console.log(resp);
      
    });
  }

  edituser(id){
    this.navCtrol.navigateRoot('tabs/usuarios/edit/'+id, { animated : true } );
  }

  volverCursos(){
    this.redireccionService.backpage();
  }
}
