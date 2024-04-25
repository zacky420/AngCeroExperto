import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//configuración del local de la app
import localeEsHn from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';


import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHn);
registerLocaleData(localeFrCA);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
