import { MaterialModule } from './modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
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
import { FireConfig } from './fire.config';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridsContainerComponent,
    LinkIconComponent,
    AuthComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(FireConfig.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(FireConfig.auth),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
