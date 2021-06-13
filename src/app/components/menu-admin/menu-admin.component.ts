import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {

  @Input() location : any;

  email;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.current_session();
  }
  current_session(){
    this.authService.get_data()
    .then(resp=>{
      console.log(resp);
      this.email = resp['data']['email']
    });
  }


}
