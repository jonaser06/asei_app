import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebinarsPageRoutingModule } from './webinars-routing.module';

import { WebinarsPage } from './webinars.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebinarsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WebinarsPage]
})
export class WebinarsPageModule {}
