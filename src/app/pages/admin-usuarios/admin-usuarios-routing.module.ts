import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUsuariosPage } from './admin-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUsuariosPage
  },
  {
    path: 'admin-colaborador',
    loadChildren: () => import('./admin-colaborador/admin-colaborador.module').then( m => m.AdminColaboradorPageModule)
  },
  {
    path: 'admin-asociado',
    loadChildren: () => import('./admin-asociado/admin-asociado.module').then( m => m.AdminAsociadoPageModule)
  },
  {
    path: 'admin-modulo',
    loadChildren: () => import('./admin-modulo/admin-modulo.module').then( m => m.AdminModuloPageModule)
  },
  {
    path: 'admin-inmobiliaria',
    loadChildren: () => import('./admin-inmobiliaria/admin-inmobiliaria.module').then( m => m.AdminInmobiliariaPageModule)
  },
  {
    path: 'admin-doc',
    loadChildren: () => import('./admin-doc/admin-doc.module').then( m => m.AdminDocPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUsuariosPageRoutingModule {}
