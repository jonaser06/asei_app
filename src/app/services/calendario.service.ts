import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private http : HttpClient) { }

  get_calendario(){
    return new Promise (resolve => {
      this.http.get(`${URL}/calendario`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  search_calendario(fecha_Inicio, fecha_Fin){
    return new Promise (resolve => {
      this.http.get(`${URL}/calendario?inicio=${fecha_Inicio}&fin=${fecha_Fin}`)
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
