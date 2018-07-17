import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyComponent } from '../../components/foo'

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

}