import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPanduanPageRoutingModule } from './modal-panduan-routing.module';

import { ModalPanduanPage } from './modal-panduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPanduanPageRoutingModule
  ],
  declarations: [ModalPanduanPage]
})
export class ModalPanduanPageModule {}
