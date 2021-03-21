import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  UserData: any ;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  
  constructor( private http: HttpClient, private storage: Storage, private navCtrol : NavController, private oneSignal: OneSignal ) { }

  login_service( email: string, password: string){

    // const data = { email, password };
    let formdata = new FormData;
    formdata.append('email', email);
    formdata.append('password', password);

    return new Promise ( resolve => {
      this.http.post(`${URL}/login`, formdata)
      .subscribe( resp => {
  
        if(resp['status']){

          this.save_userdata( JSON.stringify(resp) );

          /* suscribo a onesignal */
          this.oneSignal.getIds()
          .then(r=>{
            let id = resp['data']['user_id'];
            this.subscribe_notification(id, r.userId);
          });

          resolve(resp);
        }else{

          this.UserData = null;
          this.storage.clear();
          resolve(resp);
          
        }
        
      });
    });
    
  }

  async save_userdata( userdata : string ){
    this.UserData = userdata;
    await this.storage.set('UserData', userdata );
  }

  get_data(){
    return new Promise( resolve =>{
      this.storage.get('UserData').then((val)=>{
        if(val){
          val = JSON.parse(val);
          resolve(val);
        }else{
          this.navCtrol.navigateRoot('/login', { animated : true } ); 
          resolve(false);
        }
      })
    });
  }

  valida_user(): Promise<boolean>{
    return new Promise<boolean>( resolve =>{
      this.storage.get('UserData').then((val)=>{
        if(val){
          // val = JSON.parse(val);
          resolve(val);
        }else{
          // this.navCtrol.navigateRoot('/login', { animated : true } ); 
          resolve(false);
        }
      })
    })
  }
  
  subscribe_notification(id, notificationid){
    let formdata = new FormData;
    formdata.append('id_notify', notificationid);

    return new Promise ( resolve => {
      this.http.post(`${URL}/user/${id}/update`, formdata)
      .subscribe( resp => {
        console.log(resp);
      });
    });
  }


  logout(){
    try {
      this.storage.remove('UserData');
      return true;
    } catch (error) {
      return false
    }
  }
}