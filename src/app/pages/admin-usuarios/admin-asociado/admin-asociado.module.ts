import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminAsociadoPageRoutingModule } from './admin-asociado-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminAsociadoPage } from './admin-asociado.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    AdminAsociadoPageRoutingModule
  ],
  declarations: [AdminAsociadoPage]
})
export class AdminAsociadoPageModule {}
