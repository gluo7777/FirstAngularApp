import { Component } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html'
})

export class UserInputComponent{
  // user input
  // bad way
  keys:string="";
  values:string="";
  onKeyPressed(event:KeyboardEvent):void{
    this.keys += event.key + "|";
    this.values += (<HTMLInputElement>event.target).value + "|"; // cast target to an input element b/c not all elements have a value
  }
  // good way
  values2:string="";
  onKeyPressed2(value:string):void{
    this.values2 += value + "|";
  }
  enteredValue:string;
  enteredValues:string[] = [];
  onEnterPressed(value:string):void{
    this.enteredValue = value;
    if(value) this.enteredValues.push(value);
  }
}
