import {Component,Input} from '@angular/core';
import {Hero} from "./hero";

@Component(
  {
    selector:"hero-ui",
    template:`
    <h1>{{hero.name}}</h1>
    <h1>{{hero.action}}</h1>
    `
  }
)

export class HeroDetailComponent{
  @Input() hero: Hero;
}
