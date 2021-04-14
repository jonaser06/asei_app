import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  cal_user:string;
  constructor( private alertController : AlertController,private http: HttpClient) { }

  newCertificate(ID_CO, ID_US , formDataCalification){
    return new Promise ( resolve => {
      this.http.post(`${URL}/new-certificado/${ID_CO}/${ID_US}`, formDataCalification)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  getCertificate(ID_CER){
    return new Promise ( resolve => {
      this.http.get(`${URL}/certificado/${ID_CER}`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  getCertificates(ID_US,page = 1, input = '',limit = 6){
    return new Promise ( resolve => {
      this.http.get(`${URL}/certificados/${ID_US}?page=${page}&limit=${limit}&search=${input}`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
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

  comproved(ID_NO, ID_US){
    return new Promise ( resolve => {
      this.http.get(`${URL}/comproved/${ID_NO}/${ID_US}`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }

  

}