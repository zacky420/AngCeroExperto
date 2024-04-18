import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-region-table',
  templateUrl: './region-table.component.html',
  styles: ``
})
export class RegionTableComponent {
  @Input()
  public Regions: Country[] = []
}
