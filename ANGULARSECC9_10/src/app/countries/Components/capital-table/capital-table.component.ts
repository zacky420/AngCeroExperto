import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-capital-table',
  templateUrl: './capital-table.component.html',
  styles: `



  `
})
export class CapitalTableComponent {
  @Input()
  public capitals: Country[] = []
}
