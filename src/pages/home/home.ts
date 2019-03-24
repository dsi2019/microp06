import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnaTarjetaPage } from '../una-tarjeta/una-tarjeta';
import { UnaReservaPage } from '../una-reserva/una-reserva';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadTarjetaPage() {
    this.navCtrl.push(UnaTarjetaPage);
  }

  onLoadReservaPage() {
    this.navCtrl.push(UnaReservaPage);
  }


}
