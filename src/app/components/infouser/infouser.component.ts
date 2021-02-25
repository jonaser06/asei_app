import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.scss'],
})
export class InfouserComponent implements OnInit {

  @Input() userdata : any;

  @Output() edit = new EventEmitter();

  iduser: any;
  constructor(public authService: AuthService) { 
    this.current_session();
  }

  ngOnInit() {}

  editar(){
    this.edit.emit(this.iduser);
  }

  current_session(){
    this.authService.get_data()
    .then(resp=>{
      this.iduser = resp['data']['user_id'];
    });
  }

}
