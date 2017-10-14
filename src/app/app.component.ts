import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <!-- uses interpolation/one-way data-binding -->
  <h1>{{title}}</h1>

  <!-- hero -->
  <div>
    <label>name: </label>
    <!-- note: ngModel requires FormsModule -->
    <input [(ngModel)]="hero.name" placeholder="RandomHero">
  </div>
  <div>
    <label>action: </label>
    <input [(ngModel)]="hero.action" placeholder="RandomAction">
  </div>

  <h2>Our hero is {{hero.toString()}}!</h2>
  <h2>{{fullAction()}}</h2>
  <div><label>id :</label>{{hero.id}}</div>
  <div><label>name :</label>{{hero.name}}</div>
  <div><label>action :</label>{{hero.action}}</div>

  <!-- Villans -->
  <h1>List of villans: </h1>
  <ol class="villans">
    <!-- the * indicates that the <li> element and children constitute a master template -->
    <li *ngFor="let villan of villans">
      <span class="badge">{{villan.id}}</span> {{villan.name}}
    </li>
  </ol>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .villans {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .villans li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .villans li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .villans li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .villans .text {
    position: relative;
    top: -3px;
  }
  .villans .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Browse Heroes';
  hero: Hero = {
    id: 1001,
    name: "Samurai Jack",
    action: "cut's stuff",
    toString: function(): string {
      return this.name;
    }
  };
  fullAction = function(): string {
    return this.hero.name + " " + this.hero.action + " !";
  };
  villans = VILLANS; // typescript infers type to be of Villan[]
}

export class Hero {
  id: number;
  name: string;
  action: string;
}

export class Villan {
  id: number;
  name: string;
}

const VILLANS: Villan[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
