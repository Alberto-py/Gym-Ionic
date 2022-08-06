import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

const firebaseConfig = {
  apiKey: "AIzaSyBf-IxarTnOVRrINKIIdVExh_GT7Gb4nME",
  authDomain: "gym-ionic-db.firebaseapp.com",
  projectId: "gym-ionic-db",
  storageBucket: "gym-ionic-db.appspot.com",
  messagingSenderId: "424052541717",
  appId: "1:424052541717:web:90e781455c0920cce3c11c"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
