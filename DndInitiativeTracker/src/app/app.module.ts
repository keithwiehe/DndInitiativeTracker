import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { InitiativeComponent } from './initiative/initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
