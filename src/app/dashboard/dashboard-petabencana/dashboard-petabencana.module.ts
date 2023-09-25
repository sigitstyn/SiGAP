import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPetabencanaPageRoutingModule } from './dashboard-petabencana-routing.module';

import { DashboardPetabencanaPage } from './dashboard-petabencana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPetabencanaPageRoutingModule
  ],
  declarations: [DashboardPetabencanaPage]
})
export class DashboardPetabencanaPageModule {}
