import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalProsesPage } from './modal-proses.page';

const routes: Routes = [
  {
    path: '',
    component: ModalProsesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalProsesPageRoutingModule {}
