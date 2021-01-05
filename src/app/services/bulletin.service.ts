import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  constructor(private http: HttpClient) { }

  get_bulletin(){
    return new Promise ( resolve => {
      this.http.get(`${URL}/getchart`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  new_bulletin(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/newbulletin`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
}
