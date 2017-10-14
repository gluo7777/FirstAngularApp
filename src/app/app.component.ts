import { Component,Input } from '@angular/core';
import {Villan} from './villan';
import {Hero} from './hero';
import {VillanDetailComponent} from './villan-detail.component';
import {ObjDisplayComponent} from "./obj-display.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// equivalent to main class
export class AppComponent {
  title = 'Browse Heroes';
  villans = VILLANS; // typescript infers type to be of Villan[]
  selectedVillan: Villan;
  onSelect(villan:Villan):void {
    this.selectedVillan = villan;
  };
  selectedHero: Hero = {
    name:"",
    action:""
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
