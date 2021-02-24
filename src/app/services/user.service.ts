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

  // get_userColID(id){
  //   return new Promise ( resolve =>{
  //     this.http.get(`${URL}/notes/${id}`)
  //     .subscribe( resp =>{
  //       console.log(resp);
  //       if(resp['status']){
  //         resolve(resp);
  //       }else{
  //         resolve(resp);
  //       }
  //     });
  //   });
  // }

  create_userCol(formdata){
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

  // update_userCol(formdata, id){
  //   return new Promise ( resolve => {
  //     this.http.post(`${URL}/notes/${id}/update`, formdata)
  //     .subscribe( resp => {
  //       console.log(resp);
  //       if(resp['status']){
  //         resolve(resp);
  //       }else{
  //         resolve(resp);
  //       }
  //     });
  //   });
  // }

  // delete_userCol(id){
  //   return new Promise ( resolve => {
  //     this.http.get(`${URL}/notes/${id}/delete`)
  //     .subscribe( resp => {
  //       if(resp['status']){
  //         resolve(resp);
  //       }else{
  //         resolve(resp);
  //       }
  //     });
  //   });
  // }



}
