import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

const URL = environment.url


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  /*colaboradores*/

  update_user(id, formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/user/${id}/update`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  
  create_user(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/register`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  get_userService(id){
    return new Promise (resolve => {
      this.http.get(`${URL}/user/${id}`) 
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  get_colaboradorUser(page = 1, input = '',limit = 9){
    return new Promise (resolve => {
      this.http.get(`${URL}/users/colaborador?page=${page}&limit=${limit}&search=${input}`) 
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  get_asociadoUser(page = 1, input = '',limit = 9){
    return new Promise (resolve => {
      this.http.get(`${URL}/users/asociado?page=${page}&limit=${limit}&search=${input}`) 
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
