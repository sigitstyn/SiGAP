import { Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { NavController, AlertController } from '@ionic/angular';
import {  Router } from '@angular/router';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-dashboard-peta',
  templateUrl: './dashboard-peta.page.html',
  styleUrls: ['./dashboard-peta.page.scss'],
})
export class DashboardPetaPage {
 @ViewChild('map') mapContainer: ElementRef;
  map: L.Map;
  cluster;
  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router,
    private afs: AngularFirestore
    ) {
      this.cluster = L.markerClusterGroup();
     }

  ionViewDidEnter(){
    this.loadmap();
  }
  loadmap(){
    this.map = L.map('map'). setView([-7.0232, 110.3881], 12 );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.loadmarkerKSB();
  }
  getAllMarkers(){
    return this.afs.collection('markerKSB').valueChanges();
  }
  loadmarkerKSB(){
    this.getAllMarkers().subscribe((markerKSB: any)=> {
      markerKSB.forEach((singlemarker)=>{
        const markerGroup = this.cluster;
        const marker: any = L.marker([singlemarker.latitude, singlemarker.longitude]);
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
        marker.bindPopup(
          '<p></p>' + singlemarker.nameKSB + '</p>'
          + singlemarker.ketuaKSB + '</p>'
          + singlemarker.noKSB + '</p>'
          );
      });
    });
  }
  addMarker(){
    this.router.navigate(['/dashboard/dashboard-peta/add-marker']);
  }
}
