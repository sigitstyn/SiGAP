import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastController
    ) { }

  ngOnInit() {
  }
  logIn(email, password) {
    this.auth.login(email.value, password.value)
      .then((res) => {
          this.router.navigate(['dashboard']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
}
