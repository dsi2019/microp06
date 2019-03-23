import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})
export class ReservasPage {
  searchQuery: string = '';
  items: string[];
  userDestino: string;
  userFechaIda: any; // any porque no se que tipo de dato es
  userFechaVuelta: any;  // lo mismo aqui

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPage');
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'

      ];
    }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
 
  
}