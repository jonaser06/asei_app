import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.scss'],
})
export class InfouserComponent implements OnInit {

  @Input() userdata : any;
  constructor() { }

  ngOnInit() {}

}
