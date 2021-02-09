import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeepPageRoutingModule } from './keep-routing.module';

import { KeepPage } from './keep.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeepPageRoutingModule,
    ComponentsModule
  ],
  declarations: [KeepPage]
})
export class KeepPageModule {}
