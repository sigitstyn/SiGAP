import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLaporanPageRoutingModule } from './modal-laporan-routing.module';

import { ModalLaporanPage } from './modal-laporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLaporanPageRoutingModule
  ],
  declarations: [ModalLaporanPage]
})
export class ModalLaporanPageModule {}
