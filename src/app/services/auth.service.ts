import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  UserData: string = null;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  
  userData: string = null;
  constructor( private http: HttpClient, private storage: Storage, private navCtrol : NavController ) { }

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
          resolve(resp);
        }else{
          this.userData = null;
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

  valida_user(): Promise<boolean>{
    return new Promise<boolean>( resolve =>{
      let userdata = this.storage.get('UserData').then((val)=>{
        if(val){
          resolve(true);
        }else{
          this.navCtrol.navigateRoot('/login', { animated : true } ); 
          resolve(false);
        }
      })
    })
  }
  async logout(){
    try {
      await this.storage.remove('UserData');
      return true;
    } catch (error) {
      return false
    }
}
}