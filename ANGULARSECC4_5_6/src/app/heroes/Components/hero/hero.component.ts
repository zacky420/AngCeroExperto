import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: String = "IronMan"
public age: number = 45;

get capitalizedName():string{
  return this.name.toUpperCase();
}

 getHeroDescription():string {
  return `${ this.name } - ${ this.age }`;
}

ChangeHero():void{
  this.name = "SpiderMan"

}

ChangeAge():void{
this.age = 55;
}

resetForm():void {
 this.name = "IronMan"
  this.age = 45;


/*  document.querySelectorAll('h1')!.forEach(element => {
element.innerHTML = '<h1>Desde Angular</h1>';
  })*/
}


}
