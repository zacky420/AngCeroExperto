import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions:Region[] = ['africa','Americas','Asia','Europe','Oceania']
  public selectedRegion? :Region;
  public isLoading:boolean=false;
public initialValue: string = '';

  constructor(private CountryService: CountryService) { }

    ngOnInit(): void {
      this.countries = this.CountryService.cacheStore.byRegion.countries;
      this.initialValue =this.CountryService.cacheStore.byRegion.region;
    }


  searchByRegion(term: Region): void {
    this.isLoading=true;
    this.selectedRegion = term;
    this.CountryService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading=false;
      })
  }
}
