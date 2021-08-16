import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReserveEditModule } from './feature/reserves/reserve-edit/reserve-edit.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReserveFormModule } from './shared/components/reserve-form/reserve-form.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReserveEditModule,
    ReactiveFormsModule,
    FormsModule,
    ReserveFormModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
