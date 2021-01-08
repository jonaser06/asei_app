import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfCenterPage } from './infcenter.page';

const routes: Routes = [
  {
    path: '',
    component: InfCenterPage
  },
  {
    path: 'anniversary',
    loadChildren: () => import('./anniversary/anniversary.module').then( m => m.AnniversaryPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'fairs',
    loadChildren: () => import('./fairs/fairs.module').then( m => m.FairsPageModule)
  },
  {
    path: 'modalstar',
    loadChildren: () => import('./modalstar/modalstar.module').then( m => m.ModalstarPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfCenterPageRoutingModule {}
