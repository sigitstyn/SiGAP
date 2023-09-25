import { Component, Input, OnInit } from '@angular/core';
import { Disaster, LaporService } from 'src/app/services/lapor.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-berita',
  templateUrl: './modal-berita.page.html',
  styleUrls: ['./modal-berita.page.scss'],
})
export class ModalBeritaPage implements OnInit {

  @Input() id: string;
  disaster: Disaster = null;

  constructor(private laporService: LaporService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.laporService.getDisasterById(this.id).subscribe(res => {
      this.disaster = res;
    });
  }
}
