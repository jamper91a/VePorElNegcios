import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VePorEl,Database, Util } from '../../providers/providers';
import moment from 'moment';

@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {

  public offer:any;
  public  offers_user:any;
  constructor(
    public navCtrl: NavController,
    public navPar: NavParams,
    public veporel:VePorEl,
    public util:Util,
    private db:Database
  ) {
    this.offers_user = this.navPar.data;
    this.offer = this.offers_user.offer;
    console.log(this.offers_user);
    console.log(this.offer);
  }

  ionViewDidLoad() {

  }

  public calculate_saving(regular_price:number, price:number){
    return regular_price-price;
  }


  public go_back(){
    this.navCtrl.pop();
  }

  public calculate_time(finish:any){
    var a = moment(finish);
    var b = moment();
    var days:any =a.diff(b, 'days');
    var hours:any = a.diff(b, 'hours');
    var minutes:any = a.diff(b, 'minutes');
    if(days>1)
      days = days + " dias, ";
    else if (days == 1)
      days = days + " dia, ";
    else
      days = "";
    if(hours>24)
      hours = (hours%24);
    if(hours>1)
      hours = hours + " horas y ";
    else if (hours == 1)
      hours = hours + " hora y ";
    else
      hours = "";

    if(minutes>60)
      minutes = (minutes%60);
    if(minutes>1)
      minutes = minutes + " minutos";
    else if (minutes == 1)
      minutes = minutes + " minuto";
    else
      minutes = "";

    return days+hours+minutes;
  }

  public entregar(){
    var self=this;
    this.veporel.reclame(this.offers_user.hash)
      .subscribe((result)=>{
      var fields = [
        self.util.columns.name,
        self.util.columns.createdAt,
        self.util.columns.updatedAt
      ];
      var values=[
        self.offer.name,
        new Date(),
        new Date()
      ];
        self.db.insert(self.util.tables.offers_user, fields, values);
        self.navCtrl.pop();
        self.util.show_toast('entregar_oferta');
        //Almaceno informacion localmente
      },
        (error)=>{
          self.util.show_toast('error_14');
        });
  }


}
