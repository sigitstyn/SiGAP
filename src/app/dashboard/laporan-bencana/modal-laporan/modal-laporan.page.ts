import { Component, Input, OnInit } from '@angular/core';
import { Disaster, LaporService } from 'src/app/services/lapor.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-laporan',
  templateUrl: './modal-laporan.page.html',
  styleUrls: ['./modal-laporan.page.scss'],
})
export class ModalLaporanPage implements OnInit {
  selectTabs= 'details';
  // eslint-disable-next-line @typescript-eslint/member-ordering
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

  async deleteDisaster() {
    await this.laporService.deleteDisaster(this.disaster);
    this.modalCtrl.dismiss();
  }

  async updateDisaster() {
    await this.laporService.updateDisaster(this.disaster);
    const toast = await this.toastCtrl.create({
      message: 'Laporan updated!.',
      duration: 2000
    });
    toast.present();
  }
}
