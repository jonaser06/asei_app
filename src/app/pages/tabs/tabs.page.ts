import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  nombres : any;
  constructor(public authService: AuthService, private router: Router) {
    this.current_session();
  }

  ngOnInit() {
  }

  current_session(){
    this.authService.get_data()
    .then(resp=>{
      this.nombres = resp['data']['nombres'];
    });
  }

  goProfile(){
    this.router.navigateByUrl("/")
  }
  goNotifications() {
    this.router.navigateByUrl("/")
  }
  logout (){
    if(this.authService.logout()){
      if(AuthService){
        this.router.navigateByUrl("/login")
        }
      }  
  }

}
