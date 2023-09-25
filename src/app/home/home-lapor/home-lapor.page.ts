import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as L from 'leaflet';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
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
  selector: 'app-home-lapor',
  templateUrl: './home-lapor.page.html',
  styleUrls: ['./home-lapor.page.scss'],
})
export class HomeLaporPage{

  @ViewChild('map',{ static: false }) mapContainer: ElementRef;

  map: any;
  marker: L.Marker;
  searchKey: string;
  addressComponent: any;
  isMarkerSet = false;
  places=[];

  segment = 0;
  loadingCtrl: any;
  namaPelapor: string;
  noHP: string;
  jenisBencana: string;
  keterangan: string;
  status: string;
  latitude: string;
  longitude: string;
  pLintang: any;
  pBujur: any;

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;

  constructor(
    public http: HttpClient,
    private geolocation: Geolocation,
    private afs: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private alertController: AlertController,
    private toastCtrl: ToastController
  ) { }
  ionViewDidEnter(){
    console.log(this.marker);
    this.loadMap();
  }
  search() {
    if (this.searchKey === '') {
      this.places = [];
    } else if (this.searchKey.length > 2) {
      const url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + this.searchKey;
      this.http.get(url).subscribe((data: any) => {
        console.log(data);
        this.places = data;
      });
    }

  }
  onClickPickAddress(lat, lng) {
    this.places = [];
    console.log('0');

    this.setMarkertWithAnimation(lat,lng, false);
  }
  loadMap() {
    this.map = L.map('map').fitWorld();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'contributor',
      maxZoom: 30
    }).addTo(this.map);

    // For Web
    this.map.locate({
      setView: true,
      maxZoom: 30
    }).on('locationfound', (e) => {
      console.log(e);
      if(!this.platform.is('cordova')){
        console.log('Platform is Web');
        this.setMarkertWithAnimation(e.latitude, e.longitude, true);
      }
    });
    // For Mobile
    if(this.platform.is('cordova')){
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log('Platform is android/ios');
        this.setMarkertWithAnimation(resp.coords.latitude, resp.coords.longitude, true);
       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }

     // Adding Map Click Event
    this.map.on('click', (e) => {
      console.log('Map Clicked');
      this.setMarkertWithAnimation(e.latlng.lat, e.latlng.lng, false);
    });
  }
  setMarkertWithAnimation(lat, lng, force: boolean) {
    if(!force) {
      if(this.marker !== undefined) {
        console.log('marker was already there so removing it...');
        console.log('before remove', this.marker);
        this.marker.remove();
        this.marker = L.marker([lat, lng]).on('click', () => {
          console.log('marker clicked');

        });
        this.map.addLayer(this.marker);
        console.log('after remove', this.marker);
        this.map.setView({lat, lng}, this.map.getZoom() ,{
          animate: true,
          pan: {
            duration: 4
          }
        });
        this.http.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
        .subscribe((data: any) => {
          console.log('Address Data',data);
          this.addressComponent = data.address;
          this.searchKey = data.display_name;
          this.pLintang= lat;
          this.pBujur= lng;
        });

      }
    } else {
      this.marker = L.marker([lat, lng]).on('click', () => {
        console.log('marker clicked');

      });
      this.map.addLayer(this.marker);
      this.map.setView({lat, lng}, this.map.getZoom() ,{
        animate: true,
        pan: {
           duration: 4
        }
      });
      this.http.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
      .subscribe((data: any) => {
        console.log('Address Data',data);
        this.addressComponent = data.address;
        this.searchKey = data.display_name;
        this.pLintang= lat;
        this.pBujur= lng;
      });
    }
    setTimeout(() =>
    { this.map.invalidateSize();}, 500 );

  }

  async laporBencana(){
    await this.afs.collection('bencana').doc().set({
      namaPelapor: this.namaPelapor,
      searchKey: this.searchKey,
      noHP: this.noHP,
      jenisBencana: this.jenisBencana,
      keterangan: this.keterangan,
      createdAt: this.pipe.transform(Date.now(), 'yyyy/MM/dd, HH:mm '),
      status: 'masuk',
      latitude: this.pLintang,
      longitude: this.pBujur
    });
    const toast = await this.toastCtrl.create({
      message: 'Berhasil Melaporkan Bencana!',
      duration: 2000
    });
    toast.present();
    this.router.navigate(['/home']);
  }
}
