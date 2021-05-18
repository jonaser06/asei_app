import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsFilesPage } from './documentsfiles.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsFilesPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'edit/:id_doc',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsFilesPageRoutingModule {}
