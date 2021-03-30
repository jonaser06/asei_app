import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  get_documentsTipos(page = 1,  input = '', limit = 9, estado = 1){
    return new Promise (resolve => {
      this.http.get(`${URL}/tipo-documentos?page=${page}&limit=${limit}&estado=${estado}&search=${input}`) 
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

  get_documentsTiposID(id){
    return new Promise ( resolve =>{
      this.http.get(`${URL}/tipo-documentos/${id}`)
      .subscribe( resp =>{
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  create_documentsTipos(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/tipo-documento`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  update_documentsTipos(formdata, id){
    return new Promise ( resolve => {
      this.http.post(`${URL}/tipo-documentos/${id}/update`, formdata)
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
}
