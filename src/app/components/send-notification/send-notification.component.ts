import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss'],
})
export class SendNotificationComponent implements OnInit {

  pepperoni = false;
  constructor() { }

  ngOnInit() {}

  togglevalue(event){

    if(this.pepperoni) {
      this.pepperoni = false;
    }else{
      this.pepperoni = true;
    }

    console.log(this.pepperoni);
  }

}
