import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FieldsetModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
