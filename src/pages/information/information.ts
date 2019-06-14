import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  private option:number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.option = this.navParams.get('option');
  }

  ionViewDidLoad() {
  }

}
