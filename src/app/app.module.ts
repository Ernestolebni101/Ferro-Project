import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { APP_ROUTING } from './app.routes';
// Angular
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
