import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociadoPage } from './asociado.page';

const routes: Routes = [
  {
    path: '',
    component: AsociadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociadoPageRoutingModule {}
