import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminModuloPageRoutingModule } from './admin-modulo-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { AdminModuloPage } from './admin-modulo.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    AdminModuloPageRoutingModule
  ],
  declarations: [AdminModuloPage]
})
export class AdminModuloPageModule {}
