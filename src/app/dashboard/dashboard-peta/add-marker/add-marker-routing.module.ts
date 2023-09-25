import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMarkerPage } from './add-marker.page';

const routes: Routes = [
  {
    path: '',
    component: AddMarkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMarkerPageRoutingModule {}
