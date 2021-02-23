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

  get_colaboradorUser(page = 1, input = '',limit = 9){
    return new Promise (resolve => {
      this.http.get(`${URL}/users/colaborador?page=${page}&limit=${limit}&search=${input}`) 
      .subscribe( resp =>{
        console.log();
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
}
