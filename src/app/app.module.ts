import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here
import { AppComponent } from './app.component';
import { VillanDetailComponent } from './master-detail/villan-detail.component';
import {AnimalFormComponent} from "./forms/animal-form.component";
import {UserInputComponent} from "./input/user-input.component";
import {VillanMasterComponent} from "./master-detail/villan-master.component";

@NgModule({
  // stuff you created
  declarations: [
    AppComponent,
    VillanDetailComponent,
    VillanMasterComponent,
    AnimalFormComponent,
    UserInputComponent
  ],
  // stuff you need from outside
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
