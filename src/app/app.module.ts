import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {DakaPage, ModalContentPage} from '../pages/daka/daka';
import { TabsPage } from '../pages/tabs/tabs';
import {MyselfPage} from '../pages/myself/myself'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ViewPage} from "../pages/daka/ViewPage";
import {AddDataPage} from "../pages/daka/AddDataPage";
import {SQLite} from "@ionic-native/sqlite";
import {IonicStorageModule} from "@ionic/storage";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ModalContentPage,
    DakaPage,
    TabsPage,
    MyselfPage,
    ViewPage,
    AddDataPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DakaPage,
    TabsPage,
    MyselfPage,
    ModalContentPage,
    ViewPage,
    AddDataPage,
  ],
  providers: [
    SQLite,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
