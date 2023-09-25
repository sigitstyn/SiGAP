import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporanBencanaPage } from './laporan-bencana.page';

const routes: Routes = [
  {
    path: '',
    component: LaporanBencanaPage
  },
  {
    path: 'modal-laporan',
    loadChildren: () => import('./modal-laporan/modal-laporan.module').then( m => m.ModalLaporanPageModule)
  },
  {
    path: 'modal-proses',
    loadChildren: () => import('./modal-proses/modal-proses.module').then( m => m.ModalProsesPageModule)
  },
  {
    path: 'modal-selesai',
    loadChildren: () => import('./modal-selesai/modal-selesai.module').then( m => m.ModalSelesaiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporanBencanaPageRoutingModule {}
