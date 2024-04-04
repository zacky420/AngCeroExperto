import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3> counter: {{ counter }}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="Reset()">Reset</button>
  <button (click)="decreaseBy(1)">-1</button>
  
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;


  increaseBy(value: number): void {
    this.counter += value
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
  Reset(): void {
  this.counter = 10;
  }



}
