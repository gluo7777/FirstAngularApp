import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here
import { AppComponent } from './app.component';
import { VillanDetailComponent } from './villan-detail.component';
import { HeroDetailComponent } from "./hero-detail.component";
import {ObjDisplayComponent} from "./obj-display.component"

@NgModule({
  declarations: [
    AppComponent,
    VillanDetailComponent,
    HeroDetailComponent,
    ObjDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
