import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home-lapor',
    loadChildren: () => import('./home-lapor/home-lapor.module').then( m => m.HomeLaporPageModule)
  },
  {
    path: 'home-berita',
    loadChildren: () => import('./home-berita/home-berita.module').then( m => m.HomeBeritaPageModule)
  },
  {
    path: 'home-panduan',
    loadChildren: () => import('./home-panduan/home-panduan.module').then( m => m.HomePanduanPageModule)
  },
  {
    path: 'home-petabencana',
    loadChildren: () => import('./home-petabencana/home-petabencana.module').then( m => m.HomePetabencanaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
