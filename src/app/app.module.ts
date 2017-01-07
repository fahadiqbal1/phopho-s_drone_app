import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { DroneListPage } from '../pages/drone-list/drone-list';
import { DroneDetailPage } from '../pages/drone-detail/drone-detail';
import { FindYourDronePage } from '../pages/find-your-drone/find-your-drone';
import { FeaturedPage } from '../pages/featured/featured';
import { TabsPage } from '../pages/tabs/tabs';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1f349e77'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DroneListPage,
    DroneDetailPage,
    FindYourDronePage,
    FeaturedPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DroneListPage,
    DroneDetailPage,
    FindYourDronePage,
    FeaturedPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
