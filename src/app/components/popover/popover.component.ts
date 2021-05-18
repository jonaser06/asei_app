import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  rol: any;
  constructor(private popoverController : PopoverController, private authService: AuthService) {
    this.current_rol();
   }

  ngOnInit() {}
  
  option(o){
    this.popoverController.dismiss(o);
  }

  current_rol(){
    this.authService.get_data()
    .then(resp=>{
      this.rol = resp['data']['rol'];
      console.log(this.rol);
    });
  }

}
