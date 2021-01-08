import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnniversaryPageRoutingModule } from './anniversary-routing.module';

import { AnniversaryPage } from './anniversary.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnniversaryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnniversaryPage]
})
export class AnniversaryPageModule {}
