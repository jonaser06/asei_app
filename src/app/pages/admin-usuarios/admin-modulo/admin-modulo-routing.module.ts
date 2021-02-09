import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModuloPage } from './admin-modulo.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModuloPage
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
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
export class AdminModuloPageRoutingModule {}
