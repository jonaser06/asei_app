import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletinLegalPage } from './boletin-legal.page';

const routes: Routes = [
  {
    path: '',
    component: BoletinLegalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletinLegalPageRoutingModule {}
