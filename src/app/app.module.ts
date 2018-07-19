import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import { MyComponent } from '../components/foo';
import { DisplayPage } from '../pages/display/display';
import { RegisterPage } from '../pages/register/register';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { AuthService } from '../services/auth';
import { SigninPage } from '../pages/signin/signin';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    MyComponent,
    DisplayPage,
    RegisterPage,
    ThankyouPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    MyComponent,
    DisplayPage,
    RegisterPage,
    ThankyouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}