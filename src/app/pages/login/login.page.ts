import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  login( fLogin: NgForm ){
    //test
    console.log( this.loginUser );
    this.authService.login_service(this.loginUser.email, this.loginUser.password);
  }

}
