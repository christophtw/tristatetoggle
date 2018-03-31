import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// The toggle state is bound to "value1" by means of 2-way-databinding (see home.html)
  value1: any;

  constructor(public navCtrl: NavController) {

// initialize value1:
    this.value1 = null;

  }

// for demo of 2-way-databinding only:
setToYes() {
  this.value1 = 1;
}

setToNo() {
  this.value1 = 0;
}

setToNull() {
  this.value1 = null;
}

}
