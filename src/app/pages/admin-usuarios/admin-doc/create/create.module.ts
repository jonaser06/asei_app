import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreatePage } from './create.page';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
  ],
  exports:[
  	CreatePage
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
