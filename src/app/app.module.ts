import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompaniesComponent} from './companies/companies.component';
import {FormsModule} from "@angular/forms";
import {OrderbyPipe} from './orderby.pipe';
import {RemovePipe} from './remove.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    OrderbyPipe,
    RemovePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
