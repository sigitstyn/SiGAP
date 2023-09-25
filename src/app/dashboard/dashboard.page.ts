import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import {  AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  //subscribe: any;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public authService: AuthService,
    public platform: Platform
  ) {/* this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
    if(this.constructor.name === 'DashboardPage'){
      if(window.confirm('Do you want to exit?')){
        // eslint-disable-next-line @typescript-eslint/dot-notation
        navigator['app'].exitApp();
      }
    }
    });*/
  }

  logout() {
    if(window.confirm('Do you want to logout?')){
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['home']);
      });
    }
  }
}
