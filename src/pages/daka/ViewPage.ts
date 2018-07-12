import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {AddDataPage} from "./AddDataPage";
import {Http,Response} from "@angular/http";


@Component({
  templateUrl: 'ViewPage.html'
})
export class ViewPage {
  listData:Object

  constructor(public navCtrl: NavController,private http:Http) {
  }

  ionViewDidLoad(){
    this.http.get('/contents').subscribe((res:Response)=>
    this.listData = res.json())
    // this.http.request("http://jsonplaceholder.typicode.com/photos")
    //   .subscribe((res:Response)=>
    //   this.listData = res.json())
  }



  save_Data() {





    this.navCtrl.push(AddDataPage)
  }


}

