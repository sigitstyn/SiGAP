import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Disaster, LaporService } from 'src/app/services/lapor.service';

@Component({
  selector: 'app-modal-proses',
  templateUrl: './modal-proses.page.html',
  styleUrls: ['./modal-proses.page.scss'],
})
export class ModalProsesPage implements OnInit {
  selectTabs= 'details';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() id: string;
  disaster: Disaster = null;
  constructor(private laporService: LaporService,
    private router: Router,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.laporService.getDisasterById(this.id).subscribe(res => {
      this.disaster = res;
    });
  }
  async deleteDisaster() {
    await this.laporService.deleteDisaster(this.disaster);
    this.modalCtrl.dismiss();
  }

  async updateDisaster() {
    this.laporService.updateDisaster(this.disaster);
    const toast = await this.toastCtrl.create({
      message: 'Laporan updated!.',
      duration: 2000
    });
    toast.present();

  }
}
