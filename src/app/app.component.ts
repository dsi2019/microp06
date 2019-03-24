import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ReservasPage } from '../pages/reservas/reservas';
import { MisVuelosPage } from '../pages/mis-vuelos/mis-vuelos';
import { TarjetasPage } from '../pages/tarjetas/tarjetas';
import {CheckinPage} from '../pages/checkin/checkin'; 
import { InfoPage } from '../pages/info/info';
import { WebPage } from '../pages/web/web';

import { Vuelo } from '../models/vuelo.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  public coches:Array<Vuelo>=[
    new Vuelo("Ryanair", "", "Madrid", "Paris", "6:30", "9:00", new Date(2019-3-25), "11:00", "13:30", new Date(2019-3-27), 93),
    new Vuelo("Ryanair", "", "Madrid", "Paris", "6:30", "9:00", new Date(2019-3-25), "14:00", "16:30", new Date(2019-3-27), 96),
    new Vuelo("Ryanair", "", "Madrid", "Paris", "8:30", "11:00", new Date(2019-3-25), "11:00", "13:30", new Date(2019-3-27), 96),
    new Vuelo("Ryanair", "", "Madrid", "Paris", "10:00", "12:30", new Date(2019-3-25), "14:00", "16:30", new Date(2019-3-27), 90),
  ];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Reservas', component: ReservasPage },
      { title: 'Mis Vuelos', component: MisVuelosPage},
      { title: 'Check-In', component: CheckinPage},
      { title: 'Tarjetas', component: TarjetasPage},
      { title: 'Información', component: InfoPage},
      { title: 'Web', component: WebPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
