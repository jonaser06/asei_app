import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
})
export class VideoplayerComponent implements OnInit {

  @Input() link : any;

  youtube : any;
  constructor(private sanitizer: DomSanitizer) { 

  }

  ngOnInit() {
    // let porciones = this.link;
    // console.log(porciones);
    // console.log(this.link);
    // console.log(porciones[porciones.length])
    this.youtube = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

}
