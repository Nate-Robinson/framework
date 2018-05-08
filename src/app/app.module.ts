import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';


import { QueryComponent } from './query/query.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    QueryComponent,
    SelectComponent,
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
