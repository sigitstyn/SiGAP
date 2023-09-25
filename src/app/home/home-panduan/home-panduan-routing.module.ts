import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePanduanPage } from './home-panduan.page';

const routes: Routes = [
  {
    path: '',
    component: HomePanduanPage
  },
  {
    path: 'modal-panduan',
    loadChildren: () => import('./modal-panduan/modal-panduan.module').then( m => m.ModalPanduanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePanduanPageRoutingModule {}
