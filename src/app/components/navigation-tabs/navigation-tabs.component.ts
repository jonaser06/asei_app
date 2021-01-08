import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss'],
})
export class NavigationTabsComponent implements OnInit {

  nombres : any;
  rol : any;
  menus : any;
  constructor(public authService: AuthService, private router: Router) { 
    this.current_session();
  }
  current_session(){
    this.authService.get_data()
    .then(resp=>{
      this.nombres = resp['data']['nombres'];
      this.rol = resp['data']['rol'];
      this.menus = resp['data']['permisos'];
    });
  }

  ngOnInit() {}

}
