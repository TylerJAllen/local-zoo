import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeastFormComponent } from './beast-form/beast-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
