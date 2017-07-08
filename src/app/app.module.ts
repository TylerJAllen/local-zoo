import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BeastFormComponent } from './beast-form/beast-form.component';
import { EditBeastComponent } from './edit-beast/edit-beast.component';
import { BeastListComponent } from './beast-list/beast-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastFormComponent,
    EditBeastComponent,
    BeastListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
