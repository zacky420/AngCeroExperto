import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Cachestore, RegionCountries } from '../interfaces/cache-store';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private APIURL: string = "https://restcountries.com/v3.1/"
  public cacheStore:Cachestore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }
  constructor(private http: HttpClient) {
    console.log('CountriesService init ')
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }


  private loadFromLocalStorage(){
const item = localStorage.getItem('cacheStore')

   if (!item) return;
   this.cacheStore = JSON.parse(item!);
  }


  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() =>
          of([])),
        //delay(1000),
      );
  }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.APIURL}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }



  searchCapital(term: string): Observable<Country[]> {
    const Capital_url: string = `${this.APIURL}/capital/${term}`
    return this.getCountriesRequest(Capital_url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = {term,countries}),
      tap( () => this.saveToLocalStorage() ),
    );

  }

  searchCountry(term: string): Observable<Country[]> {
    const Country_url: string = `${this.APIURL}/name/${term}`

    return this.getCountriesRequest(Country_url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = {term,countries}),
      tap( () => this.saveToLocalStorage() )
    );

  }


  searchRegion(region: Region): Observable<Country[]> {
    const Region_url: string = `${this.APIURL}/region/${region}`

    return this.getCountriesRequest(Region_url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = {region,countries}),
      tap( () => this.saveToLocalStorage() )
    );

  }


}
