import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  //@ViewChild('nav') nav: NavController;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthService) {
  }

  goToDisplay(form: NgForm){
      this.authService.signin(form.value.email, form.value.password)
      .then(data => this.navCtrl.push(DisplayPage))
      .catch(error => console.log(error))
  }
  
}