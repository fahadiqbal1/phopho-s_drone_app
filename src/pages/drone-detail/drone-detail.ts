import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-drone-detail',
  templateUrl: 'drone-detail.html'
})
export class DroneDetailPage {
  _drone: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this._drone = this.navParams.get('drone');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DroneDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
