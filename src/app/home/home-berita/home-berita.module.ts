import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBeritaPageRoutingModule } from './home-berita-routing.module';

import { HomeBeritaPage } from './home-berita.page';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireStorageModule,
    HomeBeritaPageRoutingModule
  ],
  declarations: [HomeBeritaPage]
})
export class HomeBeritaPageModule {}
