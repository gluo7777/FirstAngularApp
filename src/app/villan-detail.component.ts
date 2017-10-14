import {Component, Input} from '@angular/core';
import {Villan} from './villan';

@Component(
  {
    selector: 'villan-detail',
    template:`
    <!-- removes villan detail from DOM if no selected hero -->
    <div *ngIf="villan">
      <h2>{{villan.name}} details!</h2>
      <div><label>id: </label>{{villan.id}}</div>
      <div>
          <label>name: </label>
          <input [(ngModel)]="villan.name" placeholder="name"/>
      </div>
    </div>
    `
  }
)

export class VillanDetailComponent{
  @Input() villan:Villan;
}
