import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/Pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/Pages/about-page/about-page.component';
import { ContactUsComponent } from './shared/Pages/contact-us/contact-us.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [
// {
//   path: "",component: HomePageComponent,
// },
{
  path : "about",component:AboutPageComponent
},
{
  path : "contact-us",component:ContactUsComponent
},
{
  path : "countries",
loadChildren: () => import ("./countries/countries.module").then (m => m.CountriesModule)
},
{
  path : "**",redirectTo:"countries/by-capital"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
