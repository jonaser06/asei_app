import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminInmobiliariaPageRoutingModule } from './admin-inmobiliaria-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { AdminInmobiliariaPage } from './admin-inmobiliaria.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    AdminInmobiliariaPageRoutingModule
  ],
  declarations: [AdminInmobiliariaPage]
})
export class AdminInmobiliariaPageModule {}
