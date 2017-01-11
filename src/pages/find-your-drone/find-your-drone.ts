import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DroneDetailPage } from '../drone-detail/drone-detail';
import { ListOfDrones,ChooseDrone } from '../../resources/data/drones';

/*
  Generated class for the FindYourDrone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-find-your-drone',
  templateUrl: 'find-your-drone.html'
})
export class FindYourDronePage {

  droneChoices: any = ChooseDrone.children;
  drones: any = ListOfDrones;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindYourDronePage');
  }

  itemSelect(item, index) {
    switch (item.type) {
      case "child":
        item.children.push({"name" : "Back","type" : "reset","icon" : "", "index" : index});
        this.droneChoices = item.children;
        break;
      case "reset":
        let rootAry = ChooseDrone.children[item.index];
        rootAry.children.pop();
        this.droneChoices = ChooseDrone.children;
        break;
    
      default:
        break;
    }
  }

  openModal(data) {
    let modal = this.modalCtrl.create(DroneDetailPage, data);
    modal.present();
  }

}
