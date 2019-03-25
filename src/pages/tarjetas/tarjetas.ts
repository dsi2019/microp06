import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';
import { UnaTarjetaPage } from '../una-tarjeta/una-tarjeta';

@IonicPage()
@Component({
  selector: 'page-tarjetas',
  templateUrl: 'tarjetas.html',
})
export class TarjetasPage {

  misTarjetas: Vuelo[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetasPage');
  }

  ionViewWillEnter(){
    this.misTarjetas = this.vueloService.getMisTarjetas();
  };

  onLoadTarjeta() {
    this.navCtrl.push(UnaTarjetaPage);
  }
}
