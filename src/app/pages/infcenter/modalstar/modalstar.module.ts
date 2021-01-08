import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalstarPageRoutingModule } from './modalstar-routing.module';

import { ModalstarPage } from './modalstar.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalstarPageRoutingModule,
    ComponentsModule
  ],
  exports:[
    ModalstarPage
  ],
  declarations: [ModalstarPage]
})
export class ModalstarPageModule {}
