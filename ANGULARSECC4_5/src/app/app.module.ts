import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './Counter/counter.module';
import { HeroModule } from './heroes/Components/Hero.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
