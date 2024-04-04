import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageDbzComponent {

  constructor(private DbzService: DbzService) { }

  get Characters(): Character[] {
    return [...this.DbzService.characters]
  }
  OnDeleteCharacter(id:string):void{
    this.DbzService.deleteCharacterById(id)
  }
  OnNewCharacter(Characters : Character):void{

    this.DbzService.addCharacter(Characters)
  }

}
