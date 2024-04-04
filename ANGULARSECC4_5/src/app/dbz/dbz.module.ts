import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDbzComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPageDbzComponent
  ],
  exports:[
    MainPageDbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
