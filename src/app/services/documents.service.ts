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

  donwload(file){
    return this.http.get(file,{responseType:'blob'})
  }

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

  get_documentsFiles(page = 1, id = '', input = '', limit = 20){
    return new Promise (resolve => {
      this.http.get(`${URL}/tipo-documento/${id}/files?page=${page}&limit=${limit}&search=${input}`) 
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

  get_documentsFilesID(id_ar,id_doc){
    return new Promise ( resolve =>{
      this.http.get(`${URL}/tipo-documento/${id_ar}/files/${id_doc}`)
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

  create_documentsFiles(formdata, path){
    return new Promise ( resolve => {
      this.http.post(`${URL}/${path}/files`, formdata)
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

  update_documentsFiles(formdata, id_ar, ID_DOC){
    return new Promise ( resolve => {
      this.http.post(`${URL}/tipo-documento/${id_ar}/files/${ID_DOC}/update`, formdata)
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

  delete_file(id_ar,id_doc){
    return new Promise ( resolve => {
      this.http.get(`${URL}/tipo-documento/${id_ar}/files/${id_doc}/delete`).subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  delete_tipo(id_ar){
    return new Promise ( resolve => {
      this.http.get(`${URL}/tipo-documentos/${id_ar}/delete`).subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
}
