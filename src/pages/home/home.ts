import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value1: any;

  constructor(public navCtrl: NavController) {

    this.value1 = null;

  }

  getState(value) {
    this.value1 = value
  }

}
