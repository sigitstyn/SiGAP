import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'laporan-bencana',
    loadChildren: () => import('./laporan-bencana/laporan-bencana.module').then( m => m.LaporanBencanaPageModule)
  },
  {
    path: 'dashboard-peta',
    loadChildren: () => import('./dashboard-peta/dashboard-peta.module').then( m => m.DashboardPetaPageModule)
  },
  {
    path: 'dashboard-panduan',
    loadChildren: () => import('./dashboard-panduan/dashboard-panduan.module').then( m => m.DashboardPanduanPageModule)
  },
  {
    path: 'dashboard-petabencana',
    loadChildren: () => import('./dashboard-petabencana/dashboard-petabencana.module').then( m => m.DashboardPetabencanaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
