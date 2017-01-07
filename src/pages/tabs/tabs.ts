import { Component } from '@angular/core';

import { FeaturedPage } from '../featured/featured';
import { AboutPage } from '../about/about';
import { DroneListPage } from '../drone-list/drone-list';
import { FindYourDronePage } from '../find-your-drone/find-your-drone'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = FeaturedPage;
  tab2Root: any = FindYourDronePage;
  tab4Root: any = AboutPage;
  tab3Root: any = DroneListPage;

  constructor() {

  }
}
