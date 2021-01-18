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

  /* news */
  get_infcenterNews(){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/noticias?last=true`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  get_infcenterNewsID(id){
    return new Promise ( resolve =>{
      this.http.get(`${URL}/notes/${id}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  /* ferias */
  get_infcenterFerias(){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/ferias`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  /* Aniversarios */
  get_infcenterAniversarios(){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/aniversarios`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  
  /* eventos */
  get_infcenterEventos(){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/eventos`)
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
