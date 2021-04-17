import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CalificationService {
  cal_user:string;
  ID_NO:any;
  ID_US:any;
  constructor( private nav: NavController,private router: Router,private alertController : AlertController,private http: HttpClient) { }

  calificar(ID_NO, ID_US , formDataCalification){
    return new Promise ( resolve => {
      this.http.post(`${URL}/calificar/${ID_NO}/${ID_US}`, formDataCalification)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  comproved(ID_NO, ID_US){
    return new Promise ( resolve => {
      this.http.get(`${URL}/comproved/${ID_NO}/${ID_US}`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }

  async modalCalificar ( ID_NO,ID_US) {
    this.ID_NO = ID_NO;
    this.ID_US = ID_US;
    (document.querySelector('.overlay-10') as HTMLElement).style.display = "block";

    // const formData = new FormData()
    // formData.append('calificacion',calification);
    
  //   this.calificar(ID_NO ,_ID_US ,formData).then( resp => {

  //     // if( resp['status']) {
  //     //     this.modalResponse('GRACIAS POR TU CALIFICACIÓN')
  //     //     setTimeout(() => this.nav.navigateRoot('tabs/inicio'), 1500);
  //     // }

  // })
  }
  async modalSend(ID_NO, ID_US ) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Con cuantas estrellas calificas este post?',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '1',
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '2',
          value: '2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '3',
          value: '3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '4',
          value: '4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '5',
          value: '5'
        },
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'calificar',
          handler: (select) => {
            const formData = new FormData()
            formData.append('calificacion',select);
            this.calificar(ID_NO , ID_US ,formData).then( resp => {
                if( resp['status']) {
                    this.modalResponse( 'GRACIAS POR TU CALIFICACIÓN')
                    setTimeout(() => window.location.reload(), 1500);
                }
            })
          }
        }
      ]
    });
    await alert.present();
  }
  async modalResponse( message : string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message,
    });

    await alert.present();
  }

}