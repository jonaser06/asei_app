import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RedireccionService {

  constructor(private navCtrol : NavController) { }

  redireccion(path){
    this.navCtrol.navigateRoot(path)

  }

  backpage(){
    this.navCtrol.back();
  }

}
