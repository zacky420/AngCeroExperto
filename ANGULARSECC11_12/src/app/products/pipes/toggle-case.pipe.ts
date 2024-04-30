import { Pipe, PipeTransform } from "@angular/core";

//fernando | toggleCase = 'FERNANDO'
//FERNANDO | toggleCase = 'fernando'
@Pipe({
  name: 'toggleCase'
})
export class TogglecasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    console.log({value,toUpper})
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
