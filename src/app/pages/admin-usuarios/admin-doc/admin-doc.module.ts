import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDocPageRoutingModule } from './admin-doc-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { AdminDocPage } from './admin-doc.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    AdminDocPageRoutingModule
  ],
  declarations: [AdminDocPage]
})
export class AdminDocPageModule {}
