import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { LaporService, Disaster } from 'src/app/services/lapor.service';
import { ModalLaporanPage } from './modal-laporan/modal-laporan.page';
import { ModalProsesPage } from './modal-proses/modal-proses.page';
import { ModalSelesaiPage } from './modal-selesai/modal-selesai.page';

@Component({
  selector: 'app-laporan-bencana',
  templateUrl: './laporan-bencana.page.html',
  styleUrls: ['./laporan-bencana.page.scss'],
})

export class LaporanBencanaPage {

  selectTabs='0';
  disasters: Disaster[] = [];
  myData: any[] = [];
  myProses: any[] = [];
  mySelesai: any[] = [];
  id?: string;
  searchKey: string;
  namaPelapor: string;
  noHP: string;
  jenisBencana: string;
  keterangan: string;
  status: string;
  createdAt;

  constructor(
    private laporService: LaporService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afs: AngularFirestore
  ) {
    this.tampilData();
    this.tampilProses();
    this.tampilSelesai();
   }

  tampilData(){
    const data = this.afs.collection('bencana',ref =>
    ref.where('status','==','masuk').orderBy('createdAt','desc'));
    const dataTerbaru = data.valueChanges({ idField: 'id'});
    dataTerbaru.subscribe(ss => this.myData = ss);
  }
  tampilProses(){
    const data = this.afs.collection('bencana',ref =>
         ref.where('status','==','proses').orderBy('createdAt','desc'));
    const dataTerbaru = data.valueChanges({ idField: 'id'});
    dataTerbaru.subscribe(ss => this.myProses = ss);
  }
  tampilSelesai(){
    const data = this.afs.collection('bencana',ref =>
         ref.where('status','==','Selesai').orderBy('createdAt','desc'));
    const dataTerbaru = data.valueChanges({ idField: 'id'});
    dataTerbaru.subscribe(ss => this.mySelesai = ss);
  }
   async openDisaster(disaster: Disaster) {
    const modal = await this.modalCtrl.create({
      component: ModalLaporanPage,
      componentProps: { id: disaster.id },
      breakpoints: [0, 0, 0],
      initialBreakpoint: 1
    });

    await modal.present();
  }
  async prosesDisaster(disaster: Disaster) {
    const modal = await this.modalCtrl.create({
      component: ModalProsesPage,
      componentProps: { id: disaster.id },
      breakpoints: [0, 0, 0],
      initialBreakpoint: 1
    });

    await modal.present();
  }
  async selesaiDisaster(disaster: Disaster) {
    const modal = await this.modalCtrl.create({
      component: ModalSelesaiPage,
      componentProps: { id: disaster.id },
      breakpoints: [0, 0, 0],
      initialBreakpoint: 1
    });

    await modal.present();
  }

}
