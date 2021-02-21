import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss'],
})
export class SendNotificationComponent implements OnInit {

  pepperoni = false;
  @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  togglevalue(event){

    if(this.pepperoni) {
      this.pepperoni = false;
    }else{
      this.pepperoni = true;
    }
    // console.log(this.pepperoni);
    this.toggle.emit(this.pepperoni);
  }

}
