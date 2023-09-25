import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPetaPage } from './dashboard-peta.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPetaPage
  },
  {
    path: 'add-marker',
    loadChildren: () => import('./add-marker/add-marker.module').then( m => m.AddMarkerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPetaPageRoutingModule {}
