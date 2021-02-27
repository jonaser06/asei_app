import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {

  @Input() sesion : any;
  @Output() viewsesion = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  verclase(link){
    this.viewsesion.emit(link);
  }
}
