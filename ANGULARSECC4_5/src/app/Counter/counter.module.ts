import { NgModule } from "@angular/core";
import { CounterComponent } from "./Components/Counter/Counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]

})
export class CounterModule { }
