import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';

@IonicPage()
@Component({
  selector: 'page-mis-vuelos',
  templateUrl: 'mis-vuelos.html',
})
export class MisVuelosPage {

  misVuelos: Vuelo[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisVuelosPage');
  }

  ionViewWillEnter(){
    this.misVuelos = this.vueloService.getMisVuelos();
  };
}
