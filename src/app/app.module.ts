import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VotePageModule } from '../pages/vote/vote.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    CoreModule,
    VotePageModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ]
})
export class AppModule {}
