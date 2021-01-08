import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfCenterPageRoutingModule } from './infcenter-routing.module';

import { InfCenterPage } from './infcenter.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfCenterPageRoutingModule,
    ComponentsModule
  ],
  exports:[
    InfCenterPage
  ],
  declarations: [InfCenterPage]
})
export class InfCenterPageModule {}
