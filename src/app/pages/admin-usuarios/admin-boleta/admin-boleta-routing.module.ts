import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBoletaPage } from './admin-boleta.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBoletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBoletaPageRoutingModule {}
