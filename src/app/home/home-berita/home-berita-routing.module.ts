import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBeritaPage } from './home-berita.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBeritaPage
  },
  {
    path: 'modal-berita',
    loadChildren: () => import('./modal-berita/modal-berita.module').then( m => m.ModalBeritaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBeritaPageRoutingModule {}
