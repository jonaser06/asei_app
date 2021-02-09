import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDocPage } from './admin-doc.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDocPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDocPageRoutingModule {}
