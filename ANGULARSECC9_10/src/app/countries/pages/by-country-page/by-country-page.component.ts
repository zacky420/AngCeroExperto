import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading:boolean=false;
public initialValue: string = '';

  constructor(private CountryService: CountryService) { }
  ngOnInit(): void {
    this.countries = this.CountryService.cacheStore.byCountries.countries;
    this.initialValue =this.CountryService.cacheStore.byCountries.term;

  }

  searchByCountry(term: string): void {
    this.isLoading=true;
    this.CountryService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading=false;
      })
  }
}
