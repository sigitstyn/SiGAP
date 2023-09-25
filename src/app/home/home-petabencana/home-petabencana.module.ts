import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePetabencanaPageRoutingModule } from './home-petabencana-routing.module';

import { HomePetabencanaPage } from './home-petabencana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePetabencanaPageRoutingModule
  ],
  declarations: [HomePetabencanaPage]
})
export class HomePetabencanaPageModule {}
