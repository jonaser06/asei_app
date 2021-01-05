import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  
  constructor(private http: HttpClient) { }

  get_indicador(){
    return new Promise ( resolve => {
      this.http.get(`${URL}/getIndicador`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  new_indicador(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/newIndicador`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  edit_indicador(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/editIndicador`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  del_indicador(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/deleteIndicador`, formdata)
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