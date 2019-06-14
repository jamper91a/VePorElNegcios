import {NgModule, ErrorHandler, Injectable, Injector} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { OfferPage } from '../pages/offer/offer';
import { CalificationPage } from '../pages/calification/calification';
import { InformationPage } from '../pages/information/information';
import { HelpPage } from '../pages/help/help';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { CompanyPage } from '../pages/company/company';

import { VePorEl, Util, User, Api, Database } from '../providers/providers';

import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { Ionic2RatingModule } from 'ionic2-rating';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
//import { ZBar } from '@ionic-native/zbar';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  LoginPage,
  MenuPage,
  WelcomePage,
  HomePage,
  OfferPage,
  CalificationPage,
  InformationPage,
  HelpPage,
  ForgetPasswordPage,
  CompanyPage,
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    Api,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    Util,
    VePorEl,
    Database,
    //ZBar,
    // SQLite,
    BarcodeScanner,
    IonicErrorHandler
    // Keep this to enable Ionic's runtime error handling during development
    // { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    //Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    //this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '5bbdb51b'
//   }
// };

@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicPageModule.forChild(MyApp),
    IonicModule.forRoot(MyApp,{
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
    }),
    IonicImageLoader.forRoot(),
    MomentModule,
    Ionic2RatingModule,
    // CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule { }
