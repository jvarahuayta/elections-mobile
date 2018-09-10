import { NgModule, ErrorHandler } from "@angular/core";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ENV } from "@app/env";

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

import { CandidatesService } from "./services/candidates.service";
import { AuthService } from "./services/auth.service";
import { VotesService } from "./services/votes.service";
import { ToastUtil } from "./utils/toast.util";

@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(
          ENV.firebase,
        ),
        AngularFireAuthModule,
        AngularFirestoreModule,
    ],    
    providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},

      ToastUtil,

      CandidatesService,
      VotesService,
      AuthService
    ]
})
export class CoreModule{ }