import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exit } from 'process';
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
  pages : any;
  currentpage : any;
  currentkey : any;
  id: any;
  inputv: any;

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
    let pages = [];
    this.authService.get_data()
    .then(resp=>{
      this.id = resp['data']['user_id'];
      let payload = {"ID_US" : this.id,"page": 1,"limit": 6};
      this.pushNotificationsService.get_notification(payload)
      .then(resp=>{
        console.log("bandeja de entrada");
        console.log(resp);
        this.notifications = resp['data'];
        for(let i = 1 ; i <= this.notifications.pages; i++ ){ pages.push(i)}
        this.pages = pages;
        this.currentpage = this.notifications.page;
      });
    });
  }

  openpush (destino) {
    const { url } = this.router;
    let path = url.split("/")[1];
    console.log(path);
    this.redireccionService.redireccion(`${path}/${destino}`);
  }

  changepage_(page){
    let pages = [];
    let payload;
    if( this.inputv === undefined){
      payload = {"ID_US" : this.id,"page": page,"limit": 6};
    }else{
      payload = {"ID_US" : this.id,"page": page,"limit": 6, "match": this.inputv };
    }
    console.log(payload);
    this.pushNotificationsService.get_notification(payload)
    .then(resp=>{
      this.notifications = resp['data'];
      for(let i = 1 ; i <= this.notifications.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.notifications.page;
    });
  }

  search_notification(){
    let input = (<HTMLInputElement>document.querySelector('.busca_noti')).value;
    this.inputv = input;
    let pages = [];
    let payload = {"ID_US" : this.id,"page": 1,"limit": 6, "match": input};
    console.log(payload);
    this.pushNotificationsService.get_notification(payload)
    .then(resp=>{
      this.notifications = resp['data'];
      for(let i = 1 ; i <= this.notifications.pages; i++ ){ pages.push(i)}
      this.pages = pages;
      this.currentpage = this.notifications.page;
    });
  }

}
