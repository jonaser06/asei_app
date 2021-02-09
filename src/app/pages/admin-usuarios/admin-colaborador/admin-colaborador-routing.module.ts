import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminColaboradorPage } from './admin-colaborador.page';

const routes: Routes = [
  {
    path: '',
    component: AdminColaboradorPage
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
export class AdminColaboradorPageRoutingModule {}
