import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

    /* buscador */
    search_estadisticos(section, page = 1, key){
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

  get_statistics(){
    return new Promise ( resolve => {
      this.http.get(`${URL}/getchart`)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  new_statistics(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/newchart`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }

  edit_statistics(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/editchart`, formdata)
      .subscribe( resp => {
        if(resp['status']){
          resolve(resp);
        }else{
          resolve(resp);
        }
      });
    });
  }
  del_statistics(formdata){
    return new Promise ( resolve => {
      this.http.post(`${URL}/deletechart`, formdata)
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
