import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadosPage } from './certificados.page';

const routes: Routes = [
  {
    path: '',
    component: CertificadosPage
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificadosPageRoutingModule {}
