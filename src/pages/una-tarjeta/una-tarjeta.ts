import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';


@IonicPage()
@Component({
  selector: 'page-una-tarjeta',
  templateUrl: 'una-tarjeta.html',
})
export class UnaTarjetaPage {


  tarjeta: Vuelo = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnaTarjetaPage');
  }

  ionViewWillEnter(){
    this.tarjeta = this.vueloService.getCurrentTarjeta();
  };

}
