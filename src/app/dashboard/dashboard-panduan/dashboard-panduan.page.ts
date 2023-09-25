import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Note } from 'src/app/services/data.service';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-dashboard-panduan',
  templateUrl: './dashboard-panduan.page.html',
  styleUrls: ['./dashboard-panduan.page.scss'],
})
export class DashboardPanduanPage {
  notes: Note[] = [];
  myNote: any[]= [];
  title;
  text;

  constructor(
    private dataService: DataService,
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

  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Tambah Panduan',
      inputs: [
        {
          name: 'title',
          placeholder: 'Jenis Bencana',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Lorem Ipsum',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            this.dataService.addNote({ text: res.text, title: res.title });
          }
        }
      ]
    });

    await alert.present();
  }

  async openNote(note: Note) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: note.id },
      breakpoints: [0, 0.0, 0.8],
      initialBreakpoint: 1
    });

    await modal.present();
  }
}
