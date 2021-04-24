import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosPage } from './usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPage
  },
  {
    path: 'colaborador',
    loadChildren: () => import('./colaborador/colaborador.module').then( m => m.ColaboradorPageModule)
  },
  {
    path: 'asociado',
    loadChildren: () => import('./asociado/asociado.module').then( m => m.AsociadoPageModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./modulos/modulos.module').then( m => m.ModulosPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'personalfiles/:id',
    loadChildren: () => import('./personalfiles/documentsfiles.module').then( m => m.DocumentsFilesPageModule)
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
export class UsuariosPageRoutingModule {}
