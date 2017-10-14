import { Component } from '@angular/core';
import {Villan} from './villan';
import {VillanDetailComponent} from './villan-detail.component';

@Component({
  selector: 'villan-master',
  template: `
  <!-- select a villan -->
  <h1>List of villans: </h1>
  <ol class="villans">
    <!-- the * indicates that the <li> element and children constitute a master template -->
    <!-- applies selected class to li based on eval value -->
    <li *ngFor="let villan of villans" [class.selected]="villan === selectedVillan" (click)="onSelect(villan)">
      <span class="badge">{{villan.id}}</span> {{villan.name}}
    </li>
  </ol>
  `,
  styleUrls: ['./villan-master.component.css'],
})

export class VillanMasterComponent{
  villans = VILLANS; // typescript infers type to be of Villan[]
  selectedVillan: Villan;
  onSelect(villan:Villan):void {
    this.selectedVillan = villan;
  };
}

const VILLANS: Villan[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];
