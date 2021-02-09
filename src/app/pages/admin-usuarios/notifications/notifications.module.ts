import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { NotificationsPage } from './notifications.page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
