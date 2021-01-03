import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'stadistics',
    loadChildren: () => import('./pages/stadistics/stadistics.module').then( m => m.StadisticsPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
    
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
