import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { BrandComponent } from './brands/brand/brand.component';
import { CreateBrandComponent } from './brands/create-brand/create-brand.component';
import { BrandDetailComponent } from './brands/brand-detail/brand-detail.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WorkOrderListComponent,
    BrandComponent,
    CreateBrandComponent,
    BrandDetailComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
        // import HttpClientModule after BrowserModule.
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
