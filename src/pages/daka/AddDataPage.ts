import {Component, ɵEMPTY_ARRAY} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {AlertController} from "ionic-angular";
import {ViewPage} from "./ViewPage";


@Component({
  templateUrl: 'AddDataPage.html'
})
export class AddDataPage {
  time: any
  text: any
  address:any
  items:any = [1,2]

  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController) {
  }
  ionViewWillEnter(){

    this.time = window.localStorage.getItem('Mytime')
    this.text = window.localStorage.getItem('Mytext')
    this.address = window.localStorage.getItem('Myaddress')
    //this.items = window.localStorage.getItem('Myitems')



  }


  // presentNewEventAlert(){
  //   let alert = this.alertCtrl.create({
  //     title:'新建事项',
  //     subTitle:'编辑您的事件',
  //     inputs:[
  //       {
  //         name:'event',
  //         placeholder:'请编辑您的事件内容'
  //
  //       }
  //     ],
  //     buttons:['确定']
  //   });
  //   alert.present();
  //
  // }


  editNewEvent(){
    this.navCtrl.push(ViewPage)
  }

}
