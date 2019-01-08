import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './gamecontrol/odd/odd.component';
import { EvenComponent } from './gamecontrol/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
