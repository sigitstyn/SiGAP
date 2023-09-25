import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePanduanPageRoutingModule } from './home-panduan-routing.module';

import { HomePanduanPage } from './home-panduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePanduanPageRoutingModule
  ],
  declarations: [HomePanduanPage]
})
export class HomePanduanPageModule {}
