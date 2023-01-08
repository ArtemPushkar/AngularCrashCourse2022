<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component , OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {products, products as data} from "./data/products";
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";
>>>>>>> 8d7688c (k)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'angular-crash-course-2022';
}
=======

  }
>>>>>>> 8d7688c (k)
