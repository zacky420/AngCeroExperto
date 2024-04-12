import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactUsPageComponent } from './shared/pages/contact-us-page/contact-us-page.component';

const routes: Routes = [

  {
    path: '', component:HomePageComponent
  },
  {
    path: 'about', component:AboutPageComponent
  },
  {
    path: 'contactUs', component:ContactUsPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
{
    path: '**', redirectTo:""
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
