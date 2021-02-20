import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  donwloadimg(file){
    return this.http.get(file,{responseType:'blob'})
  }

  get_statistics(page = 1, limit = 6){
    return new Promise ( resolve => {
      this.http.get(`${URL}/getchart?limit=${limit}&page=${page}`)
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
