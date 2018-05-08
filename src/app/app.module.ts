import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Util} from '';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { SelectComponent } from './select/select.component';
import { ModifyUrlComponent } from './modify-url/modify-url.component';


@NgModule({
  declarations: [
    QueryComponent,
    SelectComponent,
    ModifyUrlComponent,
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
