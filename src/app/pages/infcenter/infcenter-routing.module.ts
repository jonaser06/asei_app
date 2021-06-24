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
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'boletin-legal',
    loadChildren: () => import('./boletin-legal/boletin-legal.module').then( m => m.BoletinLegalPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfCenterPageRoutingModule {}
