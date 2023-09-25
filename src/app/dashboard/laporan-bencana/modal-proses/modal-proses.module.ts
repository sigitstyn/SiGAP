import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProsesPageRoutingModule } from './modal-proses-routing.module';

import { ModalProsesPage } from './modal-proses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProsesPageRoutingModule
  ],
  declarations: [ModalProsesPage]
})
export class ModalProsesPageModule {}
