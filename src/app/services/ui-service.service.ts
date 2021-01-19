import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor( private alertController : AlertController) { }

  async alert_info( message : string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  stripHtml(html: string) {
    var div = document.createElement("DIV");

    div.innerHTML = html;

    let cleanText = div.innerText;

    div = null; // prevent mem leaks

    return cleanText;
  }
}
