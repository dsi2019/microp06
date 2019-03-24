import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasPage } from './reservas';


@NgModule({
  declarations: [
    ReservasPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasPage),
  ],
})

export class ReservasPageModule {

  onAddContact(value: {nombre:string,organizacion:string,movil:string,correo:string}){

    this.contactService.addContact(value);
    this.navCtrl.pop();
  }
}

