import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListNestedComponent} from './Employee/product-list-nested.component';
import {EmployeeListComponent} from './Employee/employee-list.component';
import {ConvertToSpacePipe} from './Utilities/convert-to-space.pipe';
import {StarComponent} from './Utilities/star.component';
import {BusinessFunctionPipe} from './Utilities/business-function-pipe';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductListNestedComponent,
    BusinessFunctionPipe
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
