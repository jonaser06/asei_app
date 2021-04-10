import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
// import { File } from '@ionic-native/file/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ComponentsModule } from './components/components.module';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

//idioma
import idiomalocal from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
registerLocaleData ( idiomalocal );

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-PE'
    },
    StatusBar,
    SplashScreen,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    LocalNotifications
    // File,
    // FileTransfer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
