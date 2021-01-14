import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { environment } from '../../environments/environment.prod';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class InfcenterService {

  constructor( private http: HttpClient) { }

  get_infcenter(){

    return new Promise (resolve => {
      this.http.get(`${URL}/notes/noticias`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

}