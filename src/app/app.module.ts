import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListNestedComponent} from './Employee/product-list-nested.component';
import {ProductListComponent} from './Employee/product-list.component';
import {ConvertToSpacePipe} from './Utilities/convert-to-space.pipe';
import {ConvertToImmutableList} from './Utilities/convert-to-immutable';
import {StarComponent} from './Utilities/star.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    ConvertToImmutableList,
    StarComponent,
    ProductListNestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
