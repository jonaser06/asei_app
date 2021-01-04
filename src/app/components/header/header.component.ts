import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user_data : any;
  constructor(public autoService: AuthService, private router: Router) { 
    this.current_session();
  }

  current_session(){
    this.autoService.get_data()
    .then(resp=>{
      this.user_data = resp['data'];
      console.log(resp);
    });
  }

  goProfile(){
    this.router.navigateByUrl("/")
  }
  goNotifications() {
    this.router.navigateByUrl("/")
  }
  logout (){
    if(this.autoService.logout()){
      if(AuthService){
        this.router.navigateByUrl("/login")
        }
      }  
  }
  ngOnInit
}
