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
  
  async presentAlertConfirm(title, message) {
    let confirm;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
            alert.dismiss(true)
            return {resp:false};
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            alert.dismiss(false)
            return {resp:true};
          }
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      confirm = data
    })
    return confirm;
  }

  stripHtml(html: string) {
    var div = document.createElement("DIV");

    div.innerHTML = html;

    let cleanText = div.innerText;

    div = null; // prevent mem leaks

    return cleanText;
  }
}
