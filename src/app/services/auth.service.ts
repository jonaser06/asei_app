import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { ISessionUser, Session } from '../models/Session';
import { Router } from '@angular/router';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  
  userData: string = null;
  constructor( private http: HttpClient, private storage: Storage ) { }

  login_service( email: string, password: string){
    const data = { email, password };
    this.http.post(`${URL}/test`, data)
    .subscribe( resp => {
      console.log(resp)
    });
  }

}
