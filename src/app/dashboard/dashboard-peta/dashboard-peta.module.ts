import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPetaPageRoutingModule } from './dashboard-peta-routing.module';

import { DashboardPetaPage } from './dashboard-peta.page';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFirestoreModule,
    DashboardPetaPageRoutingModule,
  ],
  declarations: [DashboardPetaPage]
})
export class DashboardPetaPageModule {}
