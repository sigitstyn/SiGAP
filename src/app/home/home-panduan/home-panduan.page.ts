import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Note } from 'src/app/services/data.service';
import { ModalPanduanPage } from './modal-panduan/modal-panduan.page';

@Component({
  selector: 'app-home-panduan',
  templateUrl: './home-panduan.page.html',
  styleUrls: ['./home-panduan.page.scss'],
})
export class HomePanduanPage{
  notes: Note[] = [];
  myNote: any[]= [];
  title;
  text;

  constructor(private dataService: DataService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private afs: AngularFirestore
    ) {
        this.tampilData();
     }
     async tampilData(){
        const data = this.afs.collection('notes',ref => ref.orderBy('title', 'asc'));
        const dataTerbaru = data.valueChanges({ idField: 'id'});
        dataTerbaru.subscribe(ss => this.myNote = ss);
      }
    async openNote(note: Note) {
      const modal = await this.modalCtrl.create({
        component: ModalPanduanPage,
        componentProps: { id: note.id },
        breakpoints: [0, 0.0, 0.8],
        initialBreakpoint: 1
      });

      await modal.present();
    }

}
