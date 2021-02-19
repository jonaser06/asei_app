import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class WebinarsService {

  constructor(private http: HttpClient) { }

  get_cursos(page = 1, limit = 6){
    return new Promise ( resolve => {
      this.http.get(`${URL}/learn/cursos?limit=${limit}&page=${page}`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  get_curso(id_curso){
    return new Promise ( resolve => {
        this.http.get(`${URL}/learn/cursos/${id_curso}`)
        .subscribe( resp => {
          if(resp['status']){
            resolve(resp);
          }else{
            resolve(resp);
          }
        });
      });
  }

  delete_curso(id){
    return new Promise ( resolve => {
        this.http.delete(`${URL}/learn/cursos/${id}`)
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
