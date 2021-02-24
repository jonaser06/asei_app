import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociadoPageRoutingModule } from './asociado-routing.module';

import { AsociadoPage } from './asociado.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsociadoPage]
})
export class AsociadoPageModule {}
