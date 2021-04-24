import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsFilesPageRoutingModule } from './documentsfiles-routing.module';

import { DocumentsFilesPage } from './documentsfiles.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsFilesPageRoutingModule,
    ComponentsModule
  ],exports:[
    DocumentsFilesPage
  ],
  declarations: [DocumentsFilesPage]
})
export class DocumentsFilesPageModule {}
