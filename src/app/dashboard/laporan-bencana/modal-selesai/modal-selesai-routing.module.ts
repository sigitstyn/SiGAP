import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSelesaiPage } from './modal-selesai.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSelesaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSelesaiPageRoutingModule {}
