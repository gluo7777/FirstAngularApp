import {Component,Input} from '@angular/core';
import {Hero} from "./hero";

@Component(
  {
    selector:"hero-ui",
    template:`
    <hero-ui [hero]="selectedHero"></hero-ui>
    <div>
      <label>name: </label>
      <!-- note: ngModel requires FormsModule -->
      <input [(ngModel)]="selectedHero.name" placeholder="RandomHero">
    </div>
    <div>
      <label>action: </label>
      <input [(ngModel)]="selectedHero.action" placeholder="RandomAction">
    </div>
    <p>{{selectedHero.name}}</p>
    <h1>{{hero.name}}</h1>
    <h1>{{hero.action}}</h1>
    `
  }
)

export class HeroDetailComponent{
  selectedHero: Hero = {
    name:"",
    action:""
  };
  @Input() hero: Hero;
}
