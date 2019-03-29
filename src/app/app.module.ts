import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridsContainerComponent } from './components/grids-container/grids-container.component';
import { LinkIconComponent } from './components/link-icon/link-icon.component';
import { AuthComponent } from './components/auth/auth.component';
// import { FirebaseConfig, FirebaseAuthConfig } from './auth.config';

const FirebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCZ3SF_hEtcNPw8loFKnoHnVu7IMHzKOOY",
  authDomain: "newtabber-2019.firebaseapp.com",
  databaseURL: "https://newtabber-2019.firebaseio.com",
  projectId: "newtabber-2019",
  storageBucket: "newtabber-2019.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridsContainerComponent,
    LinkIconComponent,
    AuthComponent,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(FirebaseAuthConfig),
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
