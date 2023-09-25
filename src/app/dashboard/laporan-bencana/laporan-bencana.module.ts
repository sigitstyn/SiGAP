import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanBencanaPageRoutingModule } from './laporan-bencana-routing.module';

import { LaporanBencanaPage } from './laporan-bencana.page';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFirestoreModule,
    LaporanBencanaPageRoutingModule
  ],
  declarations: [LaporanBencanaPage]
})
export class LaporanBencanaPageModule {}
