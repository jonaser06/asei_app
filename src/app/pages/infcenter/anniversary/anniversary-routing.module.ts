import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnniversaryPage } from './anniversary.page';

const routes: Routes = [
  {
    path: '',
    component: AnniversaryPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnniversaryPageRoutingModule {}
