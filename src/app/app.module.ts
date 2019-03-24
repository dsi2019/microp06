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
import { UnaTarjetaPage } from '../pages/una-tarjeta/una-tarjeta';
import { InfoPage } from '../pages/info/info';
import { CheckinPage } from '../pages/checkin/checkin';
import { VueloService } from '../services/vuelo.service'
import { UnaReservaPage } from '../pages/una-reserva/una-reserva';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReservasPage,
    UnaReservaPage,
    MisVuelosPage,
    TarjetasPage,
    UnaTarjetaPage,
	  CheckinPage,
    InfoPage
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
    UnaReservaPage,
    MisVuelosPage,
    TarjetasPage,
    UnaTarjetaPage,
	  CheckinPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VueloService
  ]
})
export class AppModule {}
