import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSelesaiPageRoutingModule } from './modal-selesai-routing.module';

import { ModalSelesaiPage } from './modal-selesai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSelesaiPageRoutingModule
  ],
  declarations: [ModalSelesaiPage]
})
export class ModalSelesaiPageModule {}
