import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarsPage } from './webinars.page';

const routes: Routes = [
  {
    path: '',
    component: WebinarsPage
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebinarsPageRoutingModule {}
