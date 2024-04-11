import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, viewChild } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API_KEY: string = "6vq3IUvs0b3yhJbaexoH7wAiEmuQfFzG"
  private API_URL: string = "https://api.giphy.com/v1/gifs";
  public GifList : Gif[]  = [];

  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {
    this.LoadLocalStorage();
    console.log("Gif Service Ready!")


  }


  get tagsHistory() {
    return [...this._tagsHistory]
  }


  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory) )
  }

  private LoadLocalStorage():void{
    const temporal = localStorage.getItem('history')
    if(!temporal) return;

    this._tagsHistory = JSON.parse(temporal!)
    if (this._tagsHistory.length===0)return; {
      this.searchTag(this._tagsHistory[0])
    }


  }





  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('limit', "10")
    .set('q', tag)



    this.http.get<SearchResponse>(`${this.API_URL}/search`,{params})
      .subscribe(resp => {
       this.GifList = resp.data
       console.log({gifs : this.GifList})

      })
    /*const rep = await  fetch('https://api.giphy.com/v1/gifs/search?api_key=6vq3IUvs0b3yhJbaexoH7wAiEmuQfFzG&q=valorant&limit=10')
      const data = await rep.json();
      console.log(data)*/


  }



}
