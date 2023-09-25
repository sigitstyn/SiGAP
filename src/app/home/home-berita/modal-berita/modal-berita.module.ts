import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBeritaPageRoutingModule } from './modal-berita-routing.module';

import { ModalBeritaPage } from './modal-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBeritaPageRoutingModule
  ],
  declarations: [ModalBeritaPage]
})
export class ModalBeritaPageModule {}
