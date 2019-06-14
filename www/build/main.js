webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var User = /** @class */ (function () {
    function User(http, api, util) {
        this.http = http;
        this.api = api;
        this.util = util;
    }
    User.prototype.login = function (accountInfo) {
        var _this = this;
        accountInfo.push_code = this.util.getPreference(this.util.constants.push_code);
        var seq = this.api.post('login_company', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res != null) {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('register', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.logout = function () {
        this._user = null;
    };
    User.prototype._loggedIn = function (resp) {
        this.util.savePreference(this.util.constants.logged, true);
        this.util.savePreference(this.util.constants.user, JSON.stringify(resp.user));
        this.util.savePreference(this.util.constants.token, resp.token);
        this.util.savePreference(this.util.constants.topics, JSON.stringify(resp.categories));
        this.util.savePreference(this.util.constants.points, resp.points);
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, toastCtrl, translateService, user, util) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.user = user;
        this.util = util;
        this.account = {
            username: '',
            password: ''
        };
        if (!this.util.getPreference(this.util.constants.logged)) {
            this.translateService.get(['LOGIN_ERROR', 'SERVER_ERROR']).subscribe(function (values) {
                _this.loginErrorString = values.LOGIN_ERROR;
                _this.serverErrorString = values.SERVER_ERROR;
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
        }
    }
    WelcomePage.prototype.login = function () {
        var _this = this;
        var self = this;
        this.user.login(this.account).subscribe(function (resp) {
            self.util.savePreference(self.util.constants.logged, true);
            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
        }, function (err) {
            try {
                var body = JSON.parse(err._body);
                if (body.code == -1) {
                    var toast = _this.toastCtrl.create({
                        message: _this.loginErrorString,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
            catch (e) {
                var toast = _this.toastCtrl.create({
                    message: _this.serverErrorString,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n  </div>\n  <div padding>\n    <form>\n      <ion-list>\n\n        <ion-item>\n          <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n          <ion-input type="email" [(ngModel)]="account.username" name="username" placeholder="email@email.com"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="Contraseña"></ion-input>\n        </ion-item>\n\n        <div padding>\n          <button ion-button color="primary" block (click)="login()">Iniciar sesión</button>\n          <!--<button ion-button color="primary" block (click)="olvide_contrasena()">{{ \'olvide_la_contraseña\' | translate }}</button>-->\n        </div>\n\n      </ion-list>\n\n    </form>\n    <p text-center [innerHtml]="\'mensaje_para_registrar\'|translate"> </p>\n    <br>\n    <div text-center>\n      <a href="" text-center>{{\'terminos_y_condiciones_text\'|translate}}</a>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_2__providers_util__["a" /* Util */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__veporel__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database__ = __webpack_require__(449);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__util__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__veporel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__database__["a"]; });






//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offer_offer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner_ngx__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ZBar, ZBarOptions } from '@ionic-native/zbar';


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, veporel, util, db, 
        //private zbar: ZBar,
        barcodeScanner) {
        this.navCtrl = navCtrl;
        this.veporel = veporel;
        this.util = util;
        this.db = db;
        this.barcodeScanner = barcodeScanner;
        var user = JSON.parse(this.util.getPreference(this.util.constants.user));
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]({ enableLongStackTrace: false });
        this.company = user.company[0];
        var self = this;
        //Obtengo lo  datos
        this.db.init_db(function () {
            self.db.get_data_by_table(self.util.tables.offers_user)
                .subscribe(function (results) {
                self.zone.run(function () {
                    self.offers = results;
                    console.log(results);
                });
            });
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.scan = function () {
        var self = this;
        var options = {
            prompt: 'Coloque el código QR que aparece en el Smartphone del cliente en la aplicación VEPOREL, en el interior del rectángulo del visor para escanear y validar la veracidad de la OFERTA, beneficio o descuento'
        };
        this.barcodeScanner.scan(options)
            .then(function (result) {
            //Busco la informacion de la promocion
            self.veporel.find_promotion(result.text)
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                if (result) {
                    self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offer_offer__["a" /* OfferPage */], result);
                }
                else {
                    self.util.show_toast("error_13");
                }
            });
        })
            .catch(function (error) {
            self.util.show_toast(error);
        });
        /*var code = "61216e186186d7e5eb9ae8df8edb5669a667844eff3678fdc2376ab320e51e1e996e4a29cbd662f6caecb2ceaa178ffdea72219bcc2ab1168728c1ff51a3";
        self.veporel.find_promotion(code)
          .map(res => res.json())
          .subscribe((result)=>{
            if(result){
              result.hash = code;
              console.log(result);
              self.navCtrl.push(OfferPage,result);
            }else{
              self.util.show_toast("error_13");
            }
          });*/
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\home\home.html"*/'<ion-header>\n	<ion-navbar>\n		<!--<button ion-button menuToggle icon-only end>-->\n			<!--<ion-icon name=\'menu\'></ion-icon>-->\n		<!--</button>-->\n    <ion-buttons end>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n		<img src="assets/img/logo_horizontal.png" height="40" class="center" />\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12 text-center>\n        <h1>\n          <img src="assets/img/kind_registration/{{company.kind_registration}}.png" height="20" />\n          {{company.name}}\n        </h1>\n\n			</ion-col>\n		</ion-row>\n    <ion-row>\n      <ion-col>\n        <img src="assets/img/isologo.jpg" height="100" class="center" />\n      </ion-col>\n    </ion-row>\n		<ion-row>\n      <ion-col col-6-auto>\n        <button ion-button block (click)="scan()" >\n          {{\'validar_productos\' | translate}}\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="offers">\n      <ion-col col-12 text-center>\n        <h2>Ofertas entregadas el dia de hoy</h2>\n        <ion-list>\n          <ion-item>\n            <b>{{\'Oferta\'|translate}}</b>\n            <b item-end>{{\'Hora\'|translate}}</b>\n          </ion-item>\n          <ion-item *ngFor="let offer of offers">\n            <p>{{offer.name}}</p>\n            <p item-end>{{offer.createdAt |date: \'HH:mm\'}}</p>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* VePorEl */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Database */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfferPage = /** @class */ (function () {
    function OfferPage(navCtrl, navPar, veporel, util, db) {
        this.navCtrl = navCtrl;
        this.navPar = navPar;
        this.veporel = veporel;
        this.util = util;
        this.db = db;
        this.offers_user = this.navPar.data;
        this.offer = this.offers_user.offer;
        console.log(this.offers_user);
        console.log(this.offer);
    }
    OfferPage.prototype.ionViewDidLoad = function () {
    };
    OfferPage.prototype.calculate_saving = function (regular_price, price) {
        return regular_price - price;
    };
    OfferPage.prototype.go_back = function () {
        this.navCtrl.pop();
    };
    OfferPage.prototype.calculate_time = function (finish) {
        var a = __WEBPACK_IMPORTED_MODULE_3_moment___default()(finish);
        var b = __WEBPACK_IMPORTED_MODULE_3_moment___default()();
        var days = a.diff(b, 'days');
        var hours = a.diff(b, 'hours');
        var minutes = a.diff(b, 'minutes');
        if (days > 1)
            days = days + " dias, ";
        else if (days == 1)
            days = days + " dia, ";
        else
            days = "";
        if (hours > 24)
            hours = (hours % 24);
        if (hours > 1)
            hours = hours + " horas y ";
        else if (hours == 1)
            hours = hours + " hora y ";
        else
            hours = "";
        if (minutes > 60)
            minutes = (minutes % 60);
        if (minutes > 1)
            minutes = minutes + " minutos";
        else if (minutes == 1)
            minutes = minutes + " minuto";
        else
            minutes = "";
        return days + hours + minutes;
    };
    OfferPage.prototype.entregar = function () {
        var self = this;
        this.veporel.reclame(this.offers_user.hash)
            .subscribe(function (result) {
            var fields = [
                self.util.columns.name,
                self.util.columns.createdAt,
                self.util.columns.updatedAt
            ];
            var values = [
                self.offer.name,
                new Date(),
                new Date()
            ];
            self.db.insert(self.util.tables.offers_user, fields, values);
            self.navCtrl.pop();
            self.util.show_toast('entregar_oferta');
            //Almaceno informacion localmente
        }, function (error) {
            self.util.show_toast('error_14');
        });
    };
    OfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offer',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\offer\offer.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only end>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <img src="assets/img/logo_horizontal.png" height="40" class="center" />\n  </ion-navbar>\n</ion-header>\n<ion-content padding >\n  <div *ngIf="offer">\n    <h2 text-center>{{\'producto_encotrado\' | translate}}</h2>\n    <p text-center *ngIf="offers_user">{{\'codigo_oferta\' | translate}} CO-{{offers_user.id}}</p>\n    <img-loader src="{{util.url}}{{offer.url_photo}}" useImg fallback="assets/img/logo_horizontal.png"></img-loader>\n    <ion-list >\n      <ion-item>\n        <b>{{\'nombre\' | translate}}</b>\n        <p item-end>{{offer.name}}</p>\n      </ion-item>\n      <ion-item>\n        <b>{{\'producto\' | translate}}</b>\n        <p item-end>{{offer.product_name}} </p>\n      </ion-item>\n      <ion-item>\n        <b>{{\'precio_normal\' | translate}}</b>\n        <p item-end>{{offer.regular_price | currency:\'USD\':true:\'1.0-0\'}}</p>\n      </ion-item>\n      <ion-item>\n        <b>{{\'precio_veporel\' | translate}}</b>\n        <p item-end>{{offer.price | currency:\'USD\':true:\'1.0-0\'}}</p>\n      </ion-item>\n      <ion-item>\n        <b>{{\'tiempo_oferta\' | translate}}</b>\n        <div item-end>\n          <p>{{calculate_time(offer.finish)}}</p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-grid >\n    <ion-row>\n      <ion-col col-6-auto>\n        <button ion-button block (click)="entregar()"  [disabled]="offers_user.state>0">\n          {{\'entregar\' | translate}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\offer\offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* VePorEl */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Database */]])
    ], OfferPage);
    return OfferPage;
}());

//# sourceMappingURL=offer.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by Usuario on 02/06/2017.
 */
var Util = /** @class */ (function () {
    function Util(toastCtrl, translateService, loadingCtrl) {
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.constants = {
            logged: 'logged',
            tutorial: 'tutorial',
            user: 'user',
            token: 'token',
            latitude: 'latitude',
            longitude: 'longitude',
            type_find_promotio: 'type_find_promotio',
            find_promotio_by_location: 'find_promotio_by_location',
            find_promotion_by_subcategory: 'find_promotion_by_subcategory',
            category_id: 'category_id',
            city_name: 'city_name',
            address: 'address',
            subcategory_id: 'subcategory_id',
            offer_id: 'offer_id',
            branch_id: 'branch_id',
            offers_user: 'offers_user',
            offer: 'offer',
            kind_map: 'kind_map',
            map_offer: 'map_offer',
            map_branch: 'map_branch',
            branch: 'branch',
            company: 'company',
            country_code: 'country_code',
            find_promotion_by_user_id: 'find_promotion_by_user_id'
        };
        //this.url = "https://backend.veporel.com.co:85/";
        this.url = "http://192.168.1.65:1337/";
        this.tables = {
            offers_user: "offers_user",
        };
        this.columns = {
            name: "name",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        };
        this.google_api_key = "";
    }
    Util.prototype.savePreference = function (key, value) {
        localStorage.setItem(key, value);
    };
    Util.prototype.getPreference = function (key) {
        return localStorage.getItem(key);
    };
    Util.prototype.clearAllData = function () {
        localStorage.clear();
    };
    Util.prototype.show_toast = function (message, position) {
        var _this = this;
        this.translateService.get(message).subscribe(function (value) {
            if (!position)
                position = 'bottom';
            var toast = _this.toastCtrl.create({
                message: value,
                duration: 3000,
                position: position
            });
            toast.present();
            return toast;
        });
    };
    Util.prototype.show_dialog = function (message) {
        var loading = this.loadingCtrl.create({
            content: message,
            dismissOnPageChange: false
        });
        loading.present();
        return loading;
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forget_password_forget_password__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, navParams, toastCtrl, util, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            username: '',
            password: ''
        };
        this.account.username = this.navParams.get('username');
        this.account.password = this.navParams.get('password');
        if (!this.util.getPreference(this.util.constants.logged)) {
            this.translateService.get(['LOGIN_ERROR', 'SERVER_ERROR']).subscribe(function (values) {
                _this.loginErrorString = values.LOGIN_ERROR;
                _this.serverErrorString = values.SERVER_ERROR;
            });
            this.account.username = this.navParams.get('username');
            this.account.password = this.navParams.get('password');
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
        }
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var self = this;
        this.user.login(this.account).subscribe(function (resp) {
            self.util.savePreference(self.util.constants.logged, true);
            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
        }, function (err) {
            try {
                var body = JSON.parse(err._body);
                if (body.code == -1) {
                    var toast = _this.toastCtrl.create({
                        message: _this.loginErrorString,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
            catch (e) {
                var toast = _this.toastCtrl.create({
                    message: _this.serverErrorString,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.olvide_contrasena = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forget_password_forget_password__["a" /* ForgetPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <!--<ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.username" name="username" placeholder="email@email.com"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="{{ \'PASSWORD\' | translate }}"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block (click)="doLogin()">{{ \'LOGIN_BUTTON\' | translate }}</button>\n        <!--<button ion-button color="primary" block (click)="olvide_contrasena()">{{ \'olvide_la_contraseña\' | translate }}</button>-->\n      </div>\n\n    </ion-list>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, navParams, util, veporel) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.veporel = veporel;
        this.account = {
            email: '',
            temp_password: 0,
            new_password: '',
            new_password_r: ''
        };
        this.step = 1;
        //Determino si ya existe algún usuario
        this.account.email = this.util.getPreference("email_temp");
    }
    ForgetPasswordPage.prototype.send_temp_password = function () {
        var _this = this;
        if (this.account.email) {
            this.veporel.recovery_password(this.account.email).subscribe(function (result) {
                _this.util.savePreference("email_temp", _this.account.email);
                _this.util.show_toast('envio_contrasena_temporal');
                _this.next_step();
            }, function (err) {
                _this.util.show_toast('error_12');
            });
        }
        else {
            this.util.show_toast('error_1');
        }
    };
    ForgetPasswordPage.prototype.next_step = function () {
        this.step = 2;
    };
    ForgetPasswordPage.prototype.reset_password = function () {
        var _this = this;
        if (this.account.temp_password) {
            if (this.account.new_password) {
                if (this.account.new_password == this.account.new_password_r) {
                    this.veporel.reset_password(this.account.email, this.account.temp_password, this.account.new_password).subscribe(function (result) {
                        _this.util.savePreference("email_temp", "");
                        _this.util.show_toast('reset_password_ok');
                        _this.next_step();
                    }, function (err) {
                        try {
                            var body = JSON.parse(err._body);
                            _this.util.show_toast(body.message);
                        }
                        catch (e) {
                            _this.util.show_toast('error_12');
                        }
                    });
                }
                else {
                    this.util.show_toast('error_3');
                }
            }
            else {
                this.util.show_toast('error_4');
            }
        }
        else {
            this.util.show_toast('error_2');
        }
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-password',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\forget-password\forget-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'recuperar_contrasena\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="step==1">\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>{{ \'email\' | translate }}</ion-label>\n          <ion-input type="email" [(ngModel)]="account.email" name="username" placeholder="email@email.com"></ion-input>\n        </ion-item>\n        <div padding>\n          <button ion-button color="primary" block (click)="send_temp_password()">{{ \'recibir_contrasena_temp\' | translate }}</button>\n          <button ion-button color="primary" block (click)="next_step()">{{ \'ya_tengo_contrasena_temp\' | translate }}</button>\n        </div>\n      </ion-list>\n    </div>\n    <div *ngIf="step==2">\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>{{ \'contrasena_temporal\' | translate }}</ion-label>\n          <ion-input type="number" [(ngModel)]="account.temp_password" name="contrasena_temporal" placeholder="{{\'contrasena_temporal\' | translate }}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'nueva_contrasena\' | translate }}</ion-label>\n          <ion-input type="password" [(ngModel)]="account.new_password" name="password" placeholder="{{ \'nueva_contrasena\' | translate }}"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'repetir_contrasena\' | translate }}</ion-label>\n          <ion-input type="password" [(ngModel)]="account.new_password_r" name="password" placeholder="{{ \'repetir_contrasena\' | translate }}"></ion-input>\n        </ion-item>\n        <div padding>\n          <button ion-button color="primary" block (click)="reset_password()">{{ \'finalizar\' | translate }}</button>\n        </div>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* VePorEl */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, veporel, util, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veporel = veporel;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
    }
    HelpPage.prototype.send = function () {
        var _this = this;
        var self = this;
        this.veporel.send_message(this.message).subscribe(function (result) {
            _this.translate.get([
                "mensaje_enviado_exito"
            ]).subscribe(function (values) {
                var toast = _this.toastCtrl.create({
                    message: values.mensaje_enviado_exito,
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
            });
        }, function (error) {
            _this.translate.get([
                "error_11"
            ]).subscribe(function (values) {
                var toast = _this.toastCtrl.create({
                    message: values.error_11,
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\help\help.html"*/'<ion-header>\n  <ion-navbar>\n    <img src="assets/img/logo_horizontal.png" height="40" class="center" />\n  </ion-navbar>\n</ion-header>\n<ion-content padding >\n  <h2 text-center>{{\'en_que_podriamos_ayudarte\' | translate}}</h2>\n  <ion-list>\n    <ion-item>\n      <ion-textarea [(ngModel)]="message" clearInput></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n\n  <button ion-button block (click)="send()">\n  {{\'enviar\' | translate}}\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* VePorEl */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InformationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.option = this.navParams.get('option');
    }
    InformationPage.prototype.ionViewDidLoad = function () {
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-information',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\information\information.html"*/'\n<ion-header>\n  <ion-navbar>\n    <img src="assets/img/logo_horizontal.png" height="40" class="center" />\n  </ion-navbar>\n</ion-header>\n<ion-content padding="">\n  <div *ngIf="option==1">\n    <h2 text-center>{{\'como_funciona_text\'| translate}}</h2>\n    <p [innerHTML]="\'como_funciona\'| translate" text-wrap text-justify></p>\n  </div>\n  <div *ngIf="option==2">\n    <h2 text-center>{{\'legal_text\'| translate}}</h2>\n    <p [innerHTML]="\'info_legal\'| translate" text-wrap text-justify></p>\n  </div>\n  <div *ngIf="option==3">\n    <h2 text-center>{{\'que_es_veporel_text\'| translate}}</h2>\n    <p [innerHTML]="\'que_es_veporel\'| translate" text-wrap text-justify></p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(382);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__information_information__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, util, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.isLogged = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.homePage = MenuPage_1;
        this.informationPage = __WEBPACK_IMPORTED_MODULE_7__information_information__["a" /* InformationPage */];
        this.helpPage = __WEBPACK_IMPORTED_MODULE_6__help_help__["a" /* HelpPage */];
    }
    MenuPage_1 = MenuPage;
    MenuPage.prototype.ionViewDidLoad = function () {
        if (this.util.getPreference(this.util.constants.logged)) {
            this.isLogged = true;
        }
    };
    MenuPage.prototype.pushPage = function (p) {
        this.menuCtrl.close();
        this.navCtrl.push(p);
    };
    MenuPage.prototype.openPage = function (p) {
        this.menuCtrl.close();
        this.rootPage = p;
    };
    MenuPage.prototype.logout = function () {
        this.util.clearAllData();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */];
        // this.navCtrl.setRoot(WelcomePage);
        this.menuCtrl.close();
    };
    MenuPage.prototype.go_to_information_page = function (option) {
        this.navCtrl.push(this.informationPage, {
            "option": option
        });
    };
    MenuPage = MenuPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\menu\menu.html"*/'<ion-menu [content]="content" persistent="true" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list inset *ngIf="isLogged==true">\n      <button ion-item (click)="openPage(homePage)">\n        <ion-icon name="home"></ion-icon>\n        {{\'inicio\' | translate}}\n      </button>\n      <button ion-item (click)="pushPage(helpPage)">\n        <ion-icon name="mail"></ion-icon>\n        {{\'help\' | translate}}\n      </button>\n      <button ion-item (click)="go_to_information_page(3)">\n        <ion-icon name="help-circle"></ion-icon>\n        {{\'que_es_veporel_text\' | translate}}\n      </button>\n      <button ion-item (click)="go_to_information_page(1)">\n        <ion-icon name="help-circle"></ion-icon>\n        {{\'como_funciona_text\' | translate}}\n      </button>\n      <button ion-item (click)="go_to_information_page(2)">\n        <ion-icon name="information-circle"></ion-icon>\n        {{\'legal_text\' | translate}}\n      </button>\n      <button ion-item (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n        {{\'logout\' | translate}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MenuPage);
    return MenuPage;
    var MenuPage_1;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export declarations */
/* unused harmony export entryComponents */
/* unused harmony export providers */
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_offer_offer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_calification_calification__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_information_information__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_help_help__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forget_password_forget_password__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_company_company__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_providers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_image_loader__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_moment__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic2_rating__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner_ngx__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
//import { ZBar } from '@ionic-native/zbar';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
var pages = [
    __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
    __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_offer_offer__["a" /* OfferPage */],
    __WEBPACK_IMPORTED_MODULE_10__pages_calification_calification__["a" /* CalificationPage */],
    __WEBPACK_IMPORTED_MODULE_11__pages_information_information__["a" /* InformationPage */],
    __WEBPACK_IMPORTED_MODULE_12__pages_help_help__["a" /* HelpPage */],
    __WEBPACK_IMPORTED_MODULE_13__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
    __WEBPACK_IMPORTED_MODULE_14__pages_company_company__["a" /* CompanyPage */],
];
function declarations() {
    return pages;
}
function entryComponents() {
    return pages;
}
function providers() {
    return [
        __WEBPACK_IMPORTED_MODULE_15__providers_providers__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_15__providers_providers__["c" /* User */],
        __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_15__providers_providers__["d" /* Util */],
        __WEBPACK_IMPORTED_MODULE_15__providers_providers__["e" /* VePorEl */],
        __WEBPACK_IMPORTED_MODULE_15__providers_providers__["b" /* Database */],
        //ZBar,
        // SQLite,
        __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */]
        // Keep this to enable Ionic's runtime error handling during development
        // { provide: ErrorHandler, useClass: IonicErrorHandler }
    ];
}
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler(injector) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */]);
        }
        catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        //Pro.monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        //this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '5bbdb51b'
//   }
// };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: declarations(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_21_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_23_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: entryComponents(),
            providers: providers()
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, config, statusBar, splashScreen, util) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.util = util;
        this.platform.ready().then(function () {
            console.log("device ready");
            _this.initTranslate();
            var self = _this;
            if (_this.util.getPreference(_this.util.constants.logged)) {
                self.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_menu_menu__["a" /* MenuPage */];
            }
            else {
                self.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
            }
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('es');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('es'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* Util */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VePorEl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VePorEl = /** @class */ (function () {
    function VePorEl(http, api, util) {
        this.http = http;
        this.api = api;
        this.util = util;
    }
    VePorEl.prototype.get_banners = function (city_name) {
        var body = {
            city_name: city_name
        };
        var seq = this.api.post('banners/get', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            return res;
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_promotions_by_location = function (latitude, longitude) {
        var options = JSON.parse(this.util.getPreference("options"));
        if (!options) {
            options = {
                notifications: false,
                range: 2
            };
        }
        var body = {
            latitude: latitude,
            longitude: longitude,
            range: options.range
        };
        var dialog = this.util.show_dialog('Obteniendo las ofertas');
        var seq = this.api.post('offers/find_by_location', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_categories = function () {
        var dialog = this.util.show_dialog('Obteniendo las categorias');
        var seq = this.api.get('categories').share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_subcategories = function (category_id) {
        var dialog = this.util.show_dialog('Obteniendo las subcategorias');
        var seq = this.api.get('subcategories', { category_id: category_id }).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_offers_by_subcategory = function (subcategory_id) {
        var body = {
            latitude: this.util.getPreference(this.util.constants.latitude),
            longitude: this.util.getPreference(this.util.constants.longitude),
            city_name: this.util.getPreference(this.util.constants.city_name),
            subcategory_id: subcategory_id,
        };
        var dialog = this.util.show_dialog('Obteniendo las ofettas');
        var seq = this.api.post('offers/find_by_subcategorie', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_offer_by_id = function (offer_id) {
        var body = {
            id: offer_id
        };
        var dialog = this.util.show_dialog('Buscando la oferta');
        var seq = this.api.post('offers/find_by_id', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_offers_by_user_id = function () {
        var dialog = this.util.show_dialog('Obteniendo mis ofertas');
        var body = {
            latitude: this.util.getPreference(this.util.constants.latitude),
            longitude: this.util.getPreference(this.util.constants.longitude),
        };
        var seq = this.api.post('offers/find_by_user_id', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.take_offer = function (offer_id, branch_id) {
        var body = {
            offer_id: offer_id,
            branch_id: branch_id
        };
        var dialog = this.util.show_dialog('Tomando la oferta');
        var seq = this.api.post('offers/reserve', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.send_calification = function (body) {
        var dialog = this.util.show_dialog('Calificando');
        var seq = this.api.post('offers/qualification', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.send_message = function (message) {
        var body = {
            message: message
        };
        var dialog = this.util.show_dialog('Enviando mensaje');
        var seq = this.api.post('messages', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_countries = function () {
        var dialog = this.util.show_dialog('Listando los paises');
        var seq = this.api.get('countries', {}).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_cities_by_country = function (country_code) {
        var dialog = this.util.show_dialog('Listando las ciudades');
        var seq = this.api.get('cities', { country_code: country_code }).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.recovery_password = function (email) {
        var body = {
            email: email
        };
        var dialog = this.util.show_dialog('Solicitando contraseña temporal');
        var seq = this.api.post('recovery_password', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.reset_password = function (email, temp_password, new_password) {
        var body = {
            email: email,
            temp_password: temp_password,
            new_password: new_password
        };
        var dialog = this.util.show_dialog('Cambiando contraseña');
        var seq = this.api.post('reset_password', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_companies_by_city_subcategorie_and_name = function (body) {
        var dialog = this.util.show_dialog('Obteniendo compañias');
        var seq = this.api.post('companies/find', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.get_company_by_id = function (company_id) {
        var dialog = this.util.show_dialog('Obteniendo información del negocio');
        var body = {
            company_id: company_id
        };
        var seq = this.api.post('companies/find_by_company_id', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            return res;
        }, function (err) {
            dialog.dismiss().catch(function () { console.log('ERROR CATCH: LoadingController dismiss'); });
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.find_promotion = function (hash) {
        var body = {
            hash: hash
        };
        var seq = this.api.post('offersuser/find_by_id', body).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            return res;
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl.prototype.reclame = function (hash) {
        var body = {
            hash: hash
        };
        var seq = this.api.post('offers/reclame', body).share();
        seq
            .subscribe(function (res) {
            return res;
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    VePorEl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */]])
    ], VePorEl);
    return VePorEl;
}());

//# sourceMappingURL=veporel.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite_ngx__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Database = /** @class */ (function () {
    function Database(http, api, util, plt, sqlite) {
        this.http = http;
        this.api = api;
        this.util = util;
        this.plt = plt;
        this.sqlite = sqlite;
        this.database_name = "VePorEl";
        this.db = null;
    }
    Database.prototype.init_db = function (callback) {
        var self = this;
        if (!this.plt.is('cordova')) {
            var win = window;
            try {
                this.db = win.openDatabase(this.database_name, '1.0', "Store information", 40 * 1024 * 1024);
                this.generate_sql(callback);
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            this.sqlite.create({
                name: this.database_name,
                location: 'default'
            })
                .then(function (db) {
                self.db = db;
                self.generate_sql(callback);
            })
                .catch(function (e) { return console.log(e); });
        }
    };
    Database.prototype.generate_sql = function (callback) {
        var self = this;
        this.db.transaction(function (tx) {
            var fields = new Array();
            var sql = "";
            fields.push(self.util.columns.name + " TEXT");
            fields.push(self.util.columns.createdAt + " TEXT");
            fields.push(self.util.columns.updatedAt + " TEXT");
            sql = self.generate_table(self.util.tables.offers_user, fields);
            self.doQuery(tx, sql, [], function () {
                callback();
            });
        });
    };
    Database.prototype.generate_table = function (table_name, fields) {
        fields.push("id INTEGER  PRIMARY KEY");
        var sql = "create table IF NOT EXISTS %table_name (%columas);";
        sql = sql.replace("%table_name", table_name);
        sql = sql.replace("%columas", fields.toString());
        return sql;
    };
    Database.prototype.insert = function (table_name, fields, values) {
        var self = this;
        this.db.transaction(function (tx) {
            for (var i = 0; i < values.length; i++) {
                if (!Number.isFinite(values[i]))
                    values[i] = "'" + values[i] + "'";
            }
            var sql = "INSERT or REPLACE INTO %t (%f) values(%v)";
            sql = sql.replace("%t", table_name);
            sql = sql.replace("%f", fields);
            sql = sql.replace("%v", values);
            self.doQuery(tx, sql, [], function () {
                console.log(sql);
            });
        });
    };
    Database.prototype.get__data_by_id = function (table_name, value, result) {
        var self = this;
        this.db.transaction(function (tx) {
            var sql = "SELECT * FROM %t WHERE id = %v";
            sql = sql.replace("%t", table_name);
            sql = sql.replace("$v", value);
            self.doQuery(tx, sql, [], function (tx, rows) {
                result(rows);
            });
        });
    };
    Database.prototype.get_data_by_column = function (table_name, column, value, result) {
        var self = this;
        this.db.transaction(function (tx) {
            if (!Number.isFinite(value))
                value = "'" + value + "'";
            var sql = "SELECT * FROM %t WHERE %c = %v";
            sql = sql.replace("%t", table_name);
            sql = sql.replace("%f", column);
            sql = sql.replace("$v", value);
            self.doQuery(tx, sql, [], function (tx, rows) {
                result(rows);
            });
        });
    };
    Database.prototype.get_data_by_sql = function (sql, result) {
        var self = this;
        this.db.transaction(function (tx) {
            self.doQuery(tx, sql, [], function (tx, rows) {
                result(rows);
            });
        });
    };
    Database.prototype.get_data_by_table = function (table_name) {
        var _this = this;
        var seq = __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].create(function (observer) {
            var self = _this;
            var sql = "SELECT * FROM %t";
            sql = sql.replace("%t", table_name);
            _this.db.transaction(function (tx) {
                self.doQuery(tx, sql, [], function (rows) {
                    observer.next(rows.rows);
                });
            });
        });
        return seq;
    };
    Database.prototype.doQuery = function (tx, query, values, successHandler) {
        tx.executeSql(query, values, successHandler, function (transaction, error) {
        });
        // }
    };
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__util__["a" /* Util */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite_ngx__["a" /* SQLite */]])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-il": 247,
	"./en-il.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mn": 290,
	"./mn.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./mt": 294,
	"./mt.js": 294,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./tg": 321,
	"./tg.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./ug-cn": 329,
	"./ug-cn.js": 329,
	"./uk": 330,
	"./uk.js": 330,
	"./ur": 331,
	"./ur.js": 331,
	"./uz": 332,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 332,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 460;

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CalificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CalificationPage = /** @class */ (function () {
    function CalificationPage(navCtrl, navParams, veporel, util, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veporel = veporel;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.reclaimOn = false;
        this.reclaimOn = false;
        this.body = {
            id: this.navParams.get("id"),
            calification: 3,
            reason: '',
            reclamed: this.navParams.get("reclamed")
        };
        console.log(this.body);
    }
    CalificationPage.prototype.send_calification = function () {
        var _this = this;
        var self = this;
        this.veporel.send_calification(this.body).subscribe(function (result) {
            _this.translate.get(["opciones",
                "calificacion_exitosa"
            ]).subscribe(function (values) {
                var toast = _this.toastCtrl.create({
                    message: values.calificacion_exitosa,
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
            });
        }, function (error) {
            _this.translate.get(["opciones",
                "error_10"
            ]).subscribe(function (values) {
                var toast = _this.toastCtrl.create({
                    message: values.error_10,
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    CalificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calification',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\calification\calification.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only end>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <img src="assets/img/logo_horizontal.png" height="40" class="center" />\n  </ion-navbar>\n</ion-header>\n<ion-content padding >\n  <h2 text-center>{{\'muchas_gracias\' | translate}}</h2>\n  <div *ngIf="body.reclamed==2">\n    <ion-list>\n        <ion-item>\n          <ion-textarea [(ngModel)]="body.reason" placeholder="{{\'razon_por_no_reclamar\' | translate}}" clearInput></ion-textarea>\n        </ion-item>\n    </ion-list>\n  </div>\n\n  <p text-center>{{\'deseas_calificar\' | translate}}</p>\n  <rating text-center [(ngModel)]="body.calification"></rating>\n  <p text-center>{{\'info_calificar\' | translate}}</p>\n\n    <button ion-button block (click)="send_calification()">\n      {{\'enviar_calificacion\' | translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\calification\calification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* VePorEl */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], CalificationPage);
    return CalificationPage;
}());

//# sourceMappingURL=calification.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyPage = /** @class */ (function () {
    function CompanyPage(navCtrl, navParams, veporel, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veporel = veporel;
        this.util = util;
        this.company_id = this.navParams.get(this.util.constants.company).company_id;
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
        var self = this;
        this.veporel.get_company_by_id(this.company_id).subscribe(function (result) {
            if (result != null) {
                self.company = JSON.parse(result._body);
            }
        });
    };
    CompanyPage.prototype.go_to_offers = function () {
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-company',template:/*ion-inline-start:"C:\VePorEl\VePorElNegocios\src\pages\company\company.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only end>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <img src="assets/img/logo_horizontal.png" height="40" class="center" />\n  </ion-navbar>\n</ion-header>\n<ion-content padding >\n  <div *ngIf="company">\n    <h2 text-center> {{company.name}}</h2>\n    <div text-center>\n      <img-loader src="{{util.url}}{{company.url_photo}}" useImg fallback="assets/img/logo_horizontal.png" text-center></img-loader>\n    </div>\n\n    <ion-list >\n      <ion-item>\n        <b>{{\'telefono\' | translate}}</b>\n        <a href="tel:{{company.cellphone}}" target="_blank" item-end>\n          {{company.cellphone}}\n        </a>\n      </ion-item>\n      <ion-item>\n        <b>{{\'email\' | translate}}</b>\n        <a href="mailto:{{company.email}}" target="_blank" item-end>\n          {{company.email}}\n        </a>\n      </ion-item>\n      <ion-item>\n        <b>{{\'facebook\' | translate}}</b>\n        <a href="https://www.messenger.com/t/{{company.fanpage}}" target="_blank" item-end>\n          Contactar\n        </a>\n      </ion-item>\n      <ion-item>\n        <b>{{\'domicilio\' | translate}}</b>\n        <p item-end>{{company.domicilios?\'Si\':\'No\'}}</p>\n      </ion-item>\n      <ion-item>\n        <b>{{\'calificacion_negocio\' | translate}}</b>\n        <rating item-end [(ngModel)]="company.calification" readOnly="true">\n        </rating>\n      </ion-item>\n    </ion-list>\n    <ion-grid >\n      <ion-row>\n        <ion-col col-6-auto>\n          <button ion-button block (click)="go_to_offers()" *ngIf="company.cantidad>0">\n            {{\'mis_ofertas\' | translate}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\VePorEl\VePorElNegocios\src\pages\company\company.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* VePorEl */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["d" /* Util */]])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http, util) {
        this.http = http;
        this.util = util;
        this.timeOut = 15000;
    }
    Api.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        var token = this.util.getPreference(this.util.constants.token);
        if (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + token);
            options.headers = headers;
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        if (endpoint.includes("http"))
            return this.http.get(endpoint, options).timeout(this.timeOut);
        else
            return this.http.get(this.util.url + endpoint, options).timeout(this.timeOut);
    };
    Api.prototype.post = function (endpoint, body, options) {
        var token = this.util.getPreference(this.util.constants.token);
        if (token) {
            if (!options) {
                options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
            }
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + token);
            options.headers = headers;
        }
        if (endpoint.includes("http"))
            return this.http.post(endpoint, options).timeout(this.timeOut);
        else
            return this.http.post(this.util.url + endpoint, body, options).timeout(this.timeOut);
    };
    Api.prototype.put = function (endpoint, body, options) {
        if (endpoint.includes("http"))
            return this.http.put(endpoint, options).timeout(this.timeOut);
        else
            return this.http.put(this.util.url + endpoint, body, options).timeout(this.timeOut);
    };
    Api.prototype.delete = function (endpoint, options) {
        if (endpoint.includes("http"))
            return this.http.delete(endpoint, options).timeout(this.timeOut);
        else
            return this.http.delete(this.util.url + endpoint, options).timeout(this.timeOut);
    };
    Api.prototype.patch = function (endpoint, body, options) {
        if (endpoint.includes("http"))
            return this.http.patch(endpoint, options).timeout(this.timeOut);
        else
            return this.http.patch(this.util.url + endpoint, body, options).timeout(this.timeOut);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__util__["a" /* Util */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map