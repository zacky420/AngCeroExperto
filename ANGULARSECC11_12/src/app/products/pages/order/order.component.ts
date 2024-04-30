import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
public heroes: Hero[] = [
  {
    name:'Superman',
    canFly:true,
    color:Color.blue
},
{
  name:'Batman',
  canFly:false,
  color:Color.black
},
{
  name:'Daredevil',
  canFly:false,
  color:Color.red
},
{
  name:'Robin',
  canFly:false,
  color:Color.red
},
{
  name:'Green Lantern',
  canFly:true,
  color:Color.green
},
];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

changeOrder(value: keyof Hero){
this.orderBy = value;
}
}
