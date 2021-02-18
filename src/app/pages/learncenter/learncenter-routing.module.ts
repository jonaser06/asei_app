import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearncenterPage } from './learncenter.page';

const routes: Routes = [
  {
    path: '',
    component: LearncenterPage
  },
  {
    path: 'certificados',
    loadChildren: () => import('./certificados/certificados.module').then( m => m.CertificadosPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'webinars',
    loadChildren: () => import('./webinars/webinars.module').then( m => m.WebinarsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearncenterPageRoutingModule {}
