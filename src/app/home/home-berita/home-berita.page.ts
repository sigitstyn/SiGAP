import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { LaporService, Disaster } from 'src/app/services/lapor.service';
import { ModalBeritaPage } from './modal-berita/modal-berita.page';

@Component({
  selector: 'app-home-berita',
  templateUrl: './home-berita.page.html',
  styleUrls: ['./home-berita.page.scss'],
})
export class HomeBeritaPage {
  disasters: Disaster[] = [];
  myData: any[] = [];
  id?: string;
  searchKey: string;
  namaPelapor: string;
  noHP: string;
  jenisBencana: string;
  keterangan: string;
  status: boolean;
  createdAt;

  constructor(
    private laporService: LaporService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afs: AngularFirestore
  ) {
      this.tampilData();
   }
   async tampilData(){
      const data = this.afs.collection('bencana',ref =>
        ref.where('status','==','Selesai').orderBy('createdAt','desc'));

      const dataTerbaru = data.valueChanges({ idField: 'id'});
      dataTerbaru.subscribe(ss => this.myData = ss);
    }


   async openDisaster(disaster: Disaster) {
    const modal = await this.modalCtrl.create({
      component: ModalBeritaPage,
      componentProps: { id: disaster.id },
      breakpoints: [0, 0, 0],
      initialBreakpoint: 1
    });

    await modal.present();
  }

}
