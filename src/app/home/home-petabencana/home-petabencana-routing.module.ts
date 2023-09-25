import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePetabencanaPage } from './home-petabencana.page';

const routes: Routes = [
  {
    path: '',
    component: HomePetabencanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePetabencanaPageRoutingModule {}
