import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletinLegalPageRoutingModule } from './boletin-legal-routing.module';

import { BoletinLegalPage } from './boletin-legal.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletinLegalPageRoutingModule,
    ComponentsModule

  ],
  exports:[
    BoletinLegalPage
  ],
  declarations: [BoletinLegalPage]
})
export class BoletinLegalPageModule {}
