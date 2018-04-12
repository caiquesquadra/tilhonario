import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';

import { Tilhonario } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StartWithComponent } from '../components/start-with/start-with';

@NgModule({
  declarations: [
    Tilhonario,
    HomePage,
    LoginPage,
    StartWithComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(Tilhonario)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Tilhonario,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
