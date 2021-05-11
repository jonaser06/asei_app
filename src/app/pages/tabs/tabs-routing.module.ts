import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule )
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule )
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../usuarios/usuarios.module').then( m => m.UsuariosPageModule )
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('../admin-usuarios/admin-usuarios.module').then( m => m.AdminUsuariosPageModule )
      // },
      {
        path: 'documents',
        loadChildren: () => import('../documents/documents.module').then( m => m.DocumentsPageModule )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
