import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnniversaryPage } from './anniversary.page';

const routes: Routes = [
  {
    path: '',
    component: AnniversaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnniversaryPageRoutingModule {}
