import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

public countries: Country[] = [];

constructor(private CountryService:CountryService){}

  searchByCapital ( term:string ) : void{
this.CountryService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries
    })
  }
}
