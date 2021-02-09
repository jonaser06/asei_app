import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminInmobiliariaPage } from './admin-inmobiliaria.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInmobiliariaPage
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
export class AdminInmobiliariaPageRoutingModule {}
