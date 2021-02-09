import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUsuariosPageRoutingModule } from './admin-usuarios-routing.module';

import { AdminUsuariosPage } from './admin-usuarios.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUsuariosPageRoutingModule,
    ComponentsModule
  ],
  exports:[
    AdminUsuariosPage
  ],
  declarations: [AdminUsuariosPage]
})
export class AdminUsuariosPageModule {}
