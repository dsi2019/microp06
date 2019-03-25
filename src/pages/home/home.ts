import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnaTarjetaPage } from '../una-tarjeta/una-tarjeta';

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
}
