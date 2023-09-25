import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { IonSpinner, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  email: string;
  constructor(
    private afAuth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  async resetPassword(){
    if(this.email){
      const loading = await this.loadingCtrl.create({
        message: 'Mengirim reset-password ke Alamat Email Anda . .',
        spinner: 'bubbles',
        showBackdrop: true
      });
      loading.present();

      this.afAuth.sendPasswordResetEmail(this.email).then(()=>{
        loading.dismiss();
        this.toast('Silahkan cek kotak masuk email Anda','success');
        this.router.navigate(['/login']);
      })
      .catch((error)=>{
        this.toast(error.message,'danger');
      });
    } else {
      this.toast('Silahkan masukkan alamat email Anda!', 'danger');
    }
  } //end reset
  async toast(message, status){
    const toast = await this.toastr.create({
      message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }//end toast

}
