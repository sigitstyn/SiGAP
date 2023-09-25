import { Component, Input, OnInit } from '@angular/core';
import { Note, DataService } from 'src/app/services/data.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-panduan',
  templateUrl: './modal-panduan.page.html',
  styleUrls: ['./modal-panduan.page.scss'],
})
export class ModalPanduanPage implements OnInit {
  @Input() id: string;
  note: Note = null;
  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.dataService.getNoteById(this.id).subscribe(res => {
      this.note = res;
    });
  }

}
