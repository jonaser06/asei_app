import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBoletaPageRoutingModule } from './admin-boleta-routing.module';

import { AdminBoletaPage } from './admin-boleta.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBoletaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminBoletaPage]
})
export class AdminBoletaPageModule {}
