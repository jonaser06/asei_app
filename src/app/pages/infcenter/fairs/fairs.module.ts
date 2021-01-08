import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairsPageRoutingModule } from './fairs-routing.module';

import { FairsPage } from './fairs.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairsPageRoutingModule,
    ComponentsModule
  ],
  exports:[
    FairsPage
  ],
  declarations: [FairsPage]
})
export class FairsPageModule {}
