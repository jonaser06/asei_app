import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { ISessionUser, Session } from '../models/Session';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private basePath: string = `${environment.baseURL}`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  private userRoutes = [
    {
      name: "Usuarios",
      icon: "people",
      path: "tab3",
      role: "ADMIN"
    },
    {
      name: "Estadísticos",
      icon: "stats-chart",
      path: "estadisticas",
      role: "all"
    },
    {
      name: "Inmobiliarias",
      icon: "business",
      path: "tab3",
      role: "ADMIN"
    },
    {
      name: "Learning Center",
      icon: "book",
      path: "tab3",
      role: "all"
    },
    {
      name: "Noticias",
      icon: "calendar",
      path: "tab1",
      role: "all"
    },
    {
      name: "Documentos",
      icon: "document-text",
      path: "tab3",
      role: "COLABORADOR"
    },
    {
      name: "Documentos",
      icon: "document-text",
      path: "tab3",
      role: "ADMIN"
    },
  ]

  currentNavigation = [];
  currentNav = "";

  private session: Session;

  constructor(private http: HttpClient, private router: Router) {
    this.session = null;
  }

  getCurrentSession() {
    return this.session;
  }

  getCurrentNameUser(){
    return this.session.user.nombres.split(" ")[0];
  }
  
  getCurrentUser() {
    return this.session.user;
  }

  getCurrentRole() {
    return this.session.user.rol;
  }

  setCurrentNavigation(){
    if(!this.session) return; 
    this.currentNavigation = this.userRoutes.filter(r => r.role == "all" || r.role === this.getCurrentRole());
  }
  getCurrentNavigation() { 
    return this.currentNavigation;
  }
  
  signIn(email: string, password: string): Observable<any> {
    const body = new HttpParams()
       .set('email', email)
       .set('password', password);
    return this.http.post(`${this.basePath}/login`, body.toString(), this.httpOptions);
  }

  logout(): boolean {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("iat");
      return true;
    } catch (error) {
      return false
    }
  }

  setCurrentSession(token: string, iat: number | string, User: ISessionUser) {
    localStorage.setItem("token", token);
    localStorage.setItem("iat", iat.toString());
    localStorage.setItem("user", JSON.stringify(user));
    this.session = new Session(token, iat, user);
  }

  readStorage() {
    if(localStorage.getItem("token") && localStorage.getItem("iat")){
      this.session = new Session(localStorage.getItem("token"),
      localStorage.getItem("iat"),
      JSON.parse(localStorage.getItem("user"))
      )
      this.setCurrentNavigation();
      return true;
    }
    return false;
  }

  removeAllData() {
    this.session = null;
  }

  verifyIsAdmin(): boolean{
    if(this.session.user.rol === "ADMIN") return true;
    return false;
  }

  //current link  active
  setCurrentNavActive(path: string){
    this.currentNav = path;
  }
  getCurrentNavActive(path: string){
    if(path === this.currentNav) return "tab-selected";
    return "";
  }

}
