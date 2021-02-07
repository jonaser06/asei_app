import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioGuard } from 'src/app/guards/usuario.guard';

import { TabsPage } from './tabs.page';
import { LearncenterPageModule } from '../learncenter/learncenter.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
      {
        path: 'learning-center',
        loadChildren: () => import('../learncenter/learncenter.module').then( m => m.LearncenterPageModule )
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
