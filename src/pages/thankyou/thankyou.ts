import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayPage } from '../display/display';



@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 onGoOrderPage(){
   this.navCtrl.push(DisplayPage);
 }

}