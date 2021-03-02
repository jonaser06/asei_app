import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class LearncenterService {

  constructor(private http: HttpClient) { }

  /* Cursos */
  get_learncenterCursos(page = 1, input = '',limit = 9){
    return new Promise (resolve => {
      this.http.get(`${URL}/learn/cursos?page=${page}&limit=${limit}&search=${input}`) 
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

  get_learncenterCursosID(id){
    return new Promise ( resolve =>{
      this.http.get(`${URL}/learn/cursos/${id}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  create_learncenterCursos(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/learn/new`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_learncenterCursos(formdata, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/learn/cursos/${id}`, formdata)
      .subscribe( resp => {
        console.log(resp);
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  delete_learncenterCursos(id,section){
    return new Promise ( resolve => {
      this.http.get(`${URL}/learn/${section}/${id}/delete`) 
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  add_capacitador(formdata, tipo, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/learn/${tipo}/${id}/capacitador`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  delete_capacitador(id){
    return new Promise ( resolve => {
      this.http.get(`${URL}/capacitadores/${id}/delete`) 
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  add_sesion(formdata, tipo, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/learn/${tipo}/${id}/sesion`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  delete_sesion(id){
    return new Promise ( resolve => {
      this.http.get(`${URL}/sesiones/${id}/delete`) 
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_course(tipo, id, formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/learn/${tipo}/${id}`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  /* Webinnars */
  get_webinnars(page = 1, input = '',limit = 9){
    return new Promise (resolve => {
      this.http.get(`${URL}/learn/webinnars?page=${page}&limit=${limit}&search=${input}`) 
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

  get_webinnars_id(id){
    return new Promise ( resolve =>{
      this.http.get(`${URL}/learn/webinnars/${id}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_webinnars(tipo, id, formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/learn/${tipo}/${id}`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  delete_webinnars(id,section){
    return new Promise ( resolve => {
      this.http.get(`${URL}/learn/${section}/${id}/delete`) 
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
