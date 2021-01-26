import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StadisticsPageRoutingModule } from './stadistics-routing.module';

import { StadisticsPage } from './stadistics.page';
import { ComponentsModule } from '../../components/components.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StadisticsPageRoutingModule,
    ComponentsModule,
    SlickCarouselModule,
  ],
  exports:[
    StadisticsPage
  ],
  declarations: [StadisticsPage]
})
export class StadisticsPageModule {}
