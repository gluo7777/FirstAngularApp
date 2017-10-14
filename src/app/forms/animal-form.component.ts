import {Component} from "@angular/core";
import {Animal} from "./animal";

@Component(
  {
    selector: "animal-form",
    templateUrl: "./animal-form.component.html"
  }
)

// template driven forms
export class AnimalFormComponent{
  habitats = [
    "desert",
    "forest",
    "arctic",
    "plains",
    "urban"
  ];
  model = new Animal(10,"Dog",this.habitats[4],"doggo");
  submitted:boolean = false;
  obSubmit():void{
    this.submitted = false;
  }

  // TODO remove in prod
  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
