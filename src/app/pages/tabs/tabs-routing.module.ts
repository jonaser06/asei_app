import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/stadistics',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'stadistics',
        loadChildren: () => import('../stadistics/stadistics.module').then( m => m.StadisticsPageModule )
      },
      {
        path: 'infcenter',
        loadChildren: () => import('../infcenter/infcenter.module').then( m => m.InfCenterPageModule )
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
