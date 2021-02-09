import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminColaboradorPageRoutingModule } from './admin-colaborador-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminColaboradorPage } from './admin-colaborador.page';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    AdminColaboradorPageRoutingModule
  ],
  declarations: [AdminColaboradorPage]
})
export class AdminColaboradorPageModule {}
