import { Component, Pipe, PipeTransform } from '@angular/core';
import { Towns } from './towns-data';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  public towns: string[];
  public townSelected = '';

  constructor() {
    this.towns = Towns;
  }
}

@Pipe({ name: 'comp1StartsWith' })
export class Comp1PipeStartsWith implements PipeTransform {
  public transform(collection: string[], term = '') {
    return collection.filter(item => item.toLowerCase().startsWith(term.trim().toLowerCase()));
  }
}
