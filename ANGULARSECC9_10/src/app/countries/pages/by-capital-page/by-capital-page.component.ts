import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{



  public countries: Country[] = [];
  public isLoading:boolean=false;
public initialValue: string = '';
  constructor(private CountryService: CountryService) { }

  ngOnInit(): void {
      this.countries = this.CountryService.cacheStore.byCapital.countries;
      this.initialValue =this.CountryService.cacheStore.byCapital.term;

  }



  searchByCapital(term: string): void {
    this.isLoading=true;

    this.CountryService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }
}
