import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListNestedComponent} from './Employee/product-list-nested.component';
import {EmployeeListComponent} from './Employee/employee-list.component';
import {ConvertToSpacePipe} from './Utilities/convert-to-space.pipe';
import {StarComponent} from './Utilities/star.component';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductListNestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
