import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { ProductComponent } from './component/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './component/global-error/global-error.component';
import {FormsModule} from "@angular/forms";
import { FilterProductsPipe } from './component/pipes/filter-products.pipe';
import { ModalComponent } from './component/components/modal/modal.component';
import { CreateProductComponent } from './component/components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> 8d7688c (k)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
