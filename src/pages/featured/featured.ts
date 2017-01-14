import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { DroneDetailPage } from '../drone-detail/drone-detail';
import { ListOfDrones } from '../../resources/data/drones';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html'
})
export class FeaturedPage {

  listOfDrones: any = ListOfDrones;
  featured1: any = ListOfDrones['mini_drones'][0];
  featured2: any = ListOfDrones['camera_drones'][2];
  featured3: any = ListOfDrones['real_estate_drones'][1];
  featuredSlideOptions = {
    loop: true,
    autoplay: 1500,
    pager: false
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  openModal(data) {
    let modal = this.modalCtrl.create(DroneDetailPage, data);
    modal.present();
  }

}
