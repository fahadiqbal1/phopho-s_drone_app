import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { DroneDetailPage } from '../drone-detail/drone-detail';
import { ListOfDrones } from '../../resources/data/drones';

@Component({
  selector: 'page-drone-list',
  templateUrl: 'drone-list.html'
})
export class DroneListPage {

  listOfDrones: any = ListOfDrones;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DroneListPage');
  }

  openModal(data) {
    let modal = this.modalCtrl.create(DroneDetailPage, data);
    modal.present();
  }

}
