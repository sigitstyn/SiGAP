import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-marker',
  templateUrl: './add-marker.page.html',
  styleUrls: ['./add-marker.page.scss'],
})
export class AddMarkerPage implements OnInit {
  addPicture: File;
  nameKSB: string;
  latitude: string;
  longitude: string;
  ketuaKSB: string;
  noKSB: string;
  loadingCtrl: any;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  async addKSB(){
      this.afs.collection('markerKSB').doc().set({
      nameKSB: this.nameKSB,
      latitude: this.latitude,
      longitude: this.longitude,
      ketuaKSB: this.ketuaKSB,
      noKSB: this.noKSB
      });
      this.router.navigate(['/dashboard/dashboard-peta']);
    }
}
