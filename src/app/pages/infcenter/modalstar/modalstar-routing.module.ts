import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalstarPage } from './modalstar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalstarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalstarPageRoutingModule {}
