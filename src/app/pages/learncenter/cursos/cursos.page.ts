import { Component, OnInit } from '@angular/core';

import {IonSlides}  from '@ionic/angular';

import { RedireccionService } from '../../../services/redireccion.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  constructor(private redireccionService: RedireccionService) { }

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

  volverLearn(){
    this.redireccionService.backpage();
  }

}
