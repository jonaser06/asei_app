import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { InfoPage } from './info.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
