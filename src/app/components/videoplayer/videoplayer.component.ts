import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
})
export class VideoplayerComponent implements OnInit {

  @Input() link : any;

  constructor() { 
    
  }

  ngOnInit() {
    // let porciones = this.link;
    // console.log(porciones);
    // console.log(this.link);
    // console.log(porciones[porciones.length])
    // this.youtube = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/vXf5gaozWcc");
  }

}
