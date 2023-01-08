import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'about', component: AboutPageComponent}
];
>>>>>>> 8d7688c (k)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
