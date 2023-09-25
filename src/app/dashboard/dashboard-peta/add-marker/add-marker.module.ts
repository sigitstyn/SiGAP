import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMarkerPageRoutingModule } from './add-marker-routing.module';

import { AddMarkerPage } from './add-marker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMarkerPageRoutingModule
  ],
  declarations: [AddMarkerPage]
})
export class AddMarkerPageModule {}
