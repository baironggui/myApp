import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DakaPage } from '../daka/daka';
import {MyselfPage} from "../myself/myself";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DakaPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MyselfPage;


  constructor() {

  }
}
