import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLaporanPage } from './modal-laporan.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLaporanPageRoutingModule {}
