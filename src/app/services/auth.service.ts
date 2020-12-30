import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: string = null;
  constructor( private http: HttpClient, private storage: Storage ) { }

  login_service( email: string, password: string){
    const data = { email, password };
    this.http.post(`${URL}/login`, data)
    .subscribe( resp => {
      console.log(resp)
    });
  }
}
