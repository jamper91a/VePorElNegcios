import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Util } from '../../providers/util';
import {MenuPage} from "../menu/menu";
import { User } from '../../providers/user';
import { TranslateService } from '@ngx-translate/core';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;
  private serverErrorString: string;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public user: User,
    public util: Util,
  ) {
    if (!this.util.getPreference(this.util.constants.logged)) {
      this.translateService.get(['LOGIN_ERROR', 'SERVER_ERROR']).subscribe((values) => {
        this.loginErrorString = values.LOGIN_ERROR;
        this.serverErrorString = values.SERVER_ERROR;
      })
    }else{
      this.navCtrl.setRoot(MenuPage);
    }

  }

  login() {
    let self=this;
    this.user.login(this.account).subscribe((resp) => {
      self.util.savePreference(self.util.constants.logged, true);
      self.navCtrl.setRoot(MenuPage);
    }, (err) => {
      try {
        let body = JSON.parse(err._body);
        if (body.code==-1) {
          let toast = this.toastCtrl.create({
            message: this.loginErrorString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      } catch (e) {
        let toast = this.toastCtrl.create({
          message: this.serverErrorString,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }

    });
  }
}
