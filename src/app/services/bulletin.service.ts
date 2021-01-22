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
      this.http.get(`${URL}/getbulletin`)
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

  edit_bulletin(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/editbulletin`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  del_bulletin(formdatas){
    return new Promise ( resolve => {
      this.http.post(`${URL}/deletebulletin`, formdatas)
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
