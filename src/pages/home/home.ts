import { Component,NgZone } from '@angular/core';
import { NavController} from 'ionic-angular';
import { VePorEl, Util, Database } from '../../providers/providers';
//import { ZBar, ZBarOptions } from '@ionic-native/zbar';
import { OfferPage } from "../offer/offer";
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
   selector: 'page-home',
   templateUrl: 'home.html',
 })
 export class HomePage {

   private company:any;
   private offers:any;
   private zone;
   constructor(
     public navCtrl: NavController,
     public veporel:VePorEl,
     public util:Util,
     public db:Database,
     //private zbar: ZBar,
     private barcodeScanner: BarcodeScanner
     )
   {
     var user = JSON.parse(this.util.getPreference(this.util.constants.user));
     this.zone = new NgZone({ enableLongStackTrace: false });
     this.company = user.company[0];
     var self=this;
     //Obtengo lo  datos
     this.db.init_db(function () {
       self.db.get_data_by_table(self.util.tables.offers_user)
         .subscribe((results:any)=>{
         self.zone.run(()=>{
           self.offers = results;
           console.log(results);
         });
         });

     });
   }

   ionViewDidLoad() {


   }

   public scan() {
     let self = this;
        let options: BarcodeScannerOptions = {
          prompt: 'Coloque el código QR que aparece en el Smartphone del cliente en la aplicación VEPOREL, en el interior del rectángulo del visor para escanear y validar la veracidad de la OFERTA, beneficio o descuento'
        };
        this.barcodeScanner.scan(options)
          .then((result) => {
            //Busco la informacion de la promocion
            self.veporel.find_promotion(result.text)
              .map(res => res.json())
              .subscribe((result)=>{
                 if(result){
                   self.navCtrl.push(OfferPage,result);
                 }else{
                   self.util.show_toast("error_13");
                 }
              });

          })
          .catch(error => {
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
   }
 }
