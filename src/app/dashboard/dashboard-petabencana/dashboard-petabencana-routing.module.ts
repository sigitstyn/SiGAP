import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPetabencanaPage } from './dashboard-petabencana.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPetabencanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPetabencanaPageRoutingModule {}
