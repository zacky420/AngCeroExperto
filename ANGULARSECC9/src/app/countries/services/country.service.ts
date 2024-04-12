import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private  APIURL: string = "https://restcountries.com/v3.1/"
  constructor(private http: HttpClient) { }


  searchCapital(term: string): Observable<Country[]> {
     const Capital_url:string = `${this.APIURL}/capital/${term}`

    return this.http.get<Country[]>(Capital_url)

  }



}
