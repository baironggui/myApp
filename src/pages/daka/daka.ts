import { Component } from '@angular/core';
import {NavController, ModalController, Platform, NavParams, ViewController} from "ionic-angular";
import { ViewPage} from "./ViewPage";
import {AddDataPage} from "./AddDataPage";

@Component({
  selector: 'page-home',
  templateUrl: 'daka.html'
})

export class DakaPage {

  constructor(public modalctrl: ModalController, public navCtrl: NavController) {
  }

  clickCard1(){
    //alert('点击成功')
    this.navCtrl.push(AddDataPage)

  }



  openModal(characterNum) {
    //创建一个modal并让其显示：
    let modal = this.modalctrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}
//modal：
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})

export class ModalContentPage{
  character;
  constructor(
    public platform:Platform,
    public params: NavParams,
    public viewCtrl: ViewController

  ){
    var characters = [
      {
        name: '事项类型：',
        quote: '会议',
        items: [
          { title: '地点：', note: '年创公司' },
          { title: '时间：', note: '12月25号中午2点' },
          { title: '会议内容：', note: '软件开发' }
        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}



    // var new_card = $('#card_style').clone();
    // $('#content').append(new_card);
    // var sourceNode = document.getElementById("card_style");
    // var clonedNode = sourceNode.
    // clonedNode.attributes

    //for (var i = 0; i < 3; i++) {
    //   var new_card = document.getElementById('card_style').innerHTML;
    //   document.getElementById('card_style').innerHTML = new_card +
    //     '<ion-card class="card-content-md3" >' +
    //     '<ion-card class="card-content-md4">'+
    //     '</ion-card>'+
    //     '</ion-card>'
    //}
    // var new_card = document.createElement("div")
    // new_card.innerHTML = 'brg'
    // document.body.insertBefore(new_card,document.body.firstElementChild)





