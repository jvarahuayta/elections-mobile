import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { VotePage } from '../pages/vote/vote';
import { AuthService } from '../core/services/auth.service';

import { ENV } from '@app/env';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = VotePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  private auth: AuthService) {
    platform.ready().then(() => {
      //Make voter account login
      this.auth.login( ENV.firebase.voter.email, ENV.firebase.voter.password )
      .subscribe( couldLogin => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }
}

