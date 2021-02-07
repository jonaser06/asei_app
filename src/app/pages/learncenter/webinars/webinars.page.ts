import { Component, OnInit } from '@angular/core';
import {IonSlides}  from '@ionic/angular';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.page.html',
  styleUrls: ['./webinars.page.scss'],
})
export class WebinarsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
slideOpts={
    initialSlide: 1,
    speed: 400,
    breakpoints: {
      400: {
        
        slidesPerView: 1,
    
      
      },
      768: {
        
        slidesPerView: 2,
    
      
      },
      1000: {
        
          slidesPerView: 2,
          
        
      },
      1200:{
          slidesPerView: 3,
          
      }
    }
  };
  
  
slideNext(object, slideView) {
    slideView.slideNext(500);
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500);
  }


}