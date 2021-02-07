import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearncenterPageRoutingModule } from './learncenter-routing.module';

import { LearncenterPage } from './learncenter.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearncenterPageRoutingModule,
    ComponentsModule
  ],exports:[
    LearncenterPage
  ],
  declarations: [LearncenterPage]
})
export class LearncenterPageModule {}
