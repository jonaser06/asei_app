import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboradorPageRoutingModule } from './colaborador-routing.module';

import { ColaboradorPage } from './colaborador.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboradorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ColaboradorPage]
})
export class ColaboradorPageModule {}
