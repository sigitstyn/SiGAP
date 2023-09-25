import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPanduanPageRoutingModule } from './dashboard-panduan-routing.module';

import { DashboardPanduanPage } from './dashboard-panduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPanduanPageRoutingModule
  ],
  declarations: [DashboardPanduanPage]
})
export class DashboardPanduanPageModule {}
