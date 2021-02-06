import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';
import { StadisticsPageModule } from './pages/stadistics/stadistics.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
  },

  {
    path: 'infcenter',
    loadChildren: () => import('./pages/infcenter/infcenter.module').then( m => m.InfCenterPageModule)
  },  {
    path: 'learncenter',
    loadChildren: () => import('./pages/learncenter/learncenter.module').then( m => m.LearncenterPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
