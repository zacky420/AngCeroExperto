import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import {  RouterModule } from '@angular/router';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { CountriesModule } from '../countries/countries.module';
import { SearchBoxComponent } from '../countries/Components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CountriesModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactUsComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
