import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPanduanPage } from './modal-panduan.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPanduanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPanduanPageRoutingModule {}
