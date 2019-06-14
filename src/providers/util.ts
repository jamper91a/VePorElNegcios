import {ToastController, LoadingController, Loading} from 'ionic-angular';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IsDebug } from '@ionic-native/is-debug';
import { Platform } from 'ionic-angular';


/**
 * Created by Usuario on 02/06/2017.
 */
@Injectable()
export class Util{

  public constants;
  public url:string;
  public google_api_key:string;
  public tables;
  public columns;
  constructor(
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController
  ) {
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
      kind_map:'kind_map',
      map_offer:'map_offer',
      map_branch:'map_branch',
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
      createdAt : "createdAt",
      updatedAt : "updatedAt",

    };
    this.google_api_key = "";
  }

  public savePreference(key:string, value:any)
  {
    localStorage.setItem(key, value);
  }
  public getPreference(key):any
  {
    return localStorage.getItem(key);
  }

  public clearAllData(){
    localStorage.clear();
  }

  public show_toast(message:string, position?:string){
    this.translateService.get(message).subscribe((value) => {
      if(!position)
        position='bottom';
      let toast = this.toastCtrl.create({
        message: value,
        duration: 3000,
        position: position
      });
      toast.present();
      return toast;
    });

  }

  public show_dialog(message:string):Loading{
    let loading = this.loadingCtrl.create({
      content: message,
      dismissOnPageChange: false
    });
    loading.present();
    return loading;

  }
}
