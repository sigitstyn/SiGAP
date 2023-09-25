import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
  ],
  providers: [
    Geolocation,
    WebView
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
