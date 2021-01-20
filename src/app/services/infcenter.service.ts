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

  /* buscador */
  search_infcenter(section, page = 1, key){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/search/${section}?search=${key}&page=${page}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  /* news */
  get_infcenterNews(page = 1,limit = 4,last=false){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/noticias?limit=${limit}&page=${page}&last=${last}`)
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

  create_infcenterNews(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/new`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_infcenterNews(formdata, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/${id}/update`, formdata)
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

  delete_infcenterNews(id){
    return new Promise ( resolve => {
      this.http.get(`${URL}/notes/${id}/delete`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  /* ferias */

  get_infcenterFerias(page = 1,limit = 4, last=false){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/ferias?limit=${limit}&page=${page}&last=${last}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  get_infcenterFeriasID(id){
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

  create_infcenterFerias(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/new`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_infcenterFerias(formdata, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/${id}/update`, formdata)
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

  delete_infcenterFerias(id){
    return new Promise ( resolve => {
      this.http.get(`${URL}/notes/${id}/delete`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }


  /* Aniversarios */

  get_infcenterAniversarios(page = 1, limit = 4, last=false){
    return new Promise (resolve => {
      this.http.get(`${URL}/notes/aniversarios?limit=${limit}&page=${page}&last=${last}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  
  get_infcenterAniversariosID(id){
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

  create_infcenterAniversarios(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/new`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_infcenterAniversarios(formdata, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/${id}/update`, formdata)
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

  delete_infcenterAniversarios(id){
    return new Promise ( resolve => {
      this.http.get(`${URL}/notes/${id}/delete`)
      .subscribe( resp => {
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
  get_infcenterEventosID(id){
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

  create_infcenterEventos(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/new`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_infcenterEventos(formdata, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/notes/${id}/update`, formdata)
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

  delete_infcenterEventos(id){
    return new Promise ( resolve => {
      this.http.get(`${URL}/notes/${id}/delete`)
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
