import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PushNotificationsService } from 'src/app/services/push-notifications.service';
import { RedireccionService } from 'src/app/services/redireccion.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications : any;
  constructor( public pushNotificationsService : PushNotificationsService, public authService: AuthService , private router: Router, private redireccionService: RedireccionService) { }

  ngOnInit() {
    console.log('0. ngOnInit');
  }
  ionViewDidEnter(){
    this.load_notification();
  }
  // ionViewDidLoad(){
  //   console.log('2. ionViewDidLoad');
  // }
  // ionViewWillEnter(){
  //   console.log('3. ionViewWillEnter');
  // }
  // ionViewWillLeave(){
  //   console.log('4. ionViewWillLeave');
  // }
  // ionViewDidLeave(){
  //   console.log('5. ionViewDidLeave');
  // }
  // ionViewWillUnload(){
  //   console.log('6. ionViewWillUnload');  
  // }

  load_notification(){

    this.authService.get_data()
    .then(resp=>{
      let id = resp['data']['user_id'];

      let payload = {
          "ID_US" : id,
          "page": 1,
          "limit": 6
      };

      this.pushNotificationsService.get_notification(payload)
      .then(resp=>{
        console.log("bandeja de entrada");
        console.log(resp);
        this.notifications = resp;
      });

    });
  }

  openpush (destino) {
    const { url } = this.router;
    let path = url.split("/")[1];
    console.log(path);
    this.redireccionService.redireccion(`${path}/${destino}`);
  }

}
