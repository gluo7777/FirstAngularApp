import { Component } from "@angular/core";

@Component(
  {
    selector: "obj-display",
    template: `
    <button (click)="showObj()">{{objBtnTxt}}</button>
    <div *ngIf="canShowObj">
      <input [(ngModel)]="obj.name">
      <p>{{obj.toString()}}</p>
    </div>
    `
  }
)

export class ObjDisplayComponent {
  obj: Obj1 = new Obj1("William");
  canShowObj: boolean = false;
  objBtnTxt: string = "Click to show Object";
  showObj(): void {
    this.objBtnTxt = (this.canShowObj = !this.canShowObj) ? "Click to show Object" : "Click to hide Object";
  };
}

export class Obj1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  };
  toString():string{
    return "Object name: " + this.name;
  };
}
