import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { ForgetPasswordPage } from '../forget-password/forget-password';

import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';
import { Util } from '../../providers/util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;
  private serverErrorString: string;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public util: Util,
    public translateService: TranslateService,
  ) {

    this.account.username = this.navParams.get('username');
    this.account.password = this.navParams.get('password');
    if (!this.util.getPreference(this.util.constants.logged)) {
      this.translateService.get(['LOGIN_ERROR', 'SERVER_ERROR']).subscribe((values) => {
        this.loginErrorString = values.LOGIN_ERROR;
        this.serverErrorString = values.SERVER_ERROR;
      });
      this.account.username = this.navParams.get('username');
      this.account.password = this.navParams.get('password');
    }else{
      this.navCtrl.setRoot(MenuPage);
    }
  }


  // Attempt to login in through our User service
  doLogin() {
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

  public olvide_contrasena(){
    this.navCtrl.push(ForgetPasswordPage);
  }


}
