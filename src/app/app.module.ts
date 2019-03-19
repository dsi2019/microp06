import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ReservasPage } from '../pages/reservas/reservas';
import { MisVuelosPage } from '../pages/mis-vuelos/mis-vuelos';
import { TarjetasPage } from '../pages/tarjetas/tarjetas';

import {VueloService} from '../services/vuelo.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReservasPage,
    MisVuelosPage,
    TarjetasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReservasPage,
    MisVuelosPage,
    TarjetasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VueloService
  ]
})
export class AppModule {}
