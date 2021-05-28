import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.scss'],
})
export class MoreNewsComponent implements OnInit {

  @Input() news_child : any;
  @Input() title : any;
  @Input() section : any;

  URL = environment.url;

  constructor() { }

  ngOnInit() {}

}
