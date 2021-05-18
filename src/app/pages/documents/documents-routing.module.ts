import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DocumentsPage } from './documents.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'files/:id',
    loadChildren: () => import('./files/documentsfiles.module').then( m => m.DocumentsFilesPageModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPageRoutingModule {}
