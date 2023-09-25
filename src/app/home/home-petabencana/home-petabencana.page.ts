import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
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
  selector: 'app-home-petabencana',
  templateUrl: './home-petabencana.page.html',
  styleUrls: ['./home-petabencana.page.scss'],
})
export class HomePetabencanaPage  {

  @ViewChild('map') mapContainer: ElementRef;
  map: L.Map;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public authService: AuthService,
    public platform: Platform) { }
  ionViewDidEnter(){
    this.loadmap();
  }
  loadmap(){
    this.map = L.map('map'). setView([-7.0232, 110.3881], 10 );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  this.loadmarkerBencana();
}
getAllMarkers(){
  return this.afs.collection('bencana', ref => ref.where('status','==','Selesai')).valueChanges();
}
loadmarkerBencana(){
  this.getAllMarkers().subscribe((markerBencana: any)=> {
    markerBencana.forEach((singlemarker)=>{
      const markerGroup = L.featureGroup();
      const marker: any = L.marker([singlemarker.latitude, singlemarker.longitude]);
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      marker.bindPopup(
        '<h3>' + singlemarker.jenisBencana + '</h3>'+
        singlemarker.createdAt + '<br>' +
        singlemarker.searchKey + '<br>' +
        ' Hub:' + singlemarker.noHP  +
        '</p>'
        );
    });
  });
}



}
