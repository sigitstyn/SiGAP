import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLaporPageRoutingModule } from './home-lapor-routing.module';

import { HomeLaporPage } from './home-lapor.page';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AngularFirestoreModule,
    HomeLaporPageRoutingModule
  ],
  declarations: [HomeLaporPage],
  providers: [
    Geolocation,
    WebView
  ]
})
export class HomeLaporPageModule {}
