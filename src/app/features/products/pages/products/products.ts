import { Component } from '@angular/core';
import { ProductsFilter } from '../../components/products-filter/products-filter';

@Component({
  selector: 'app-products',
  imports: [ProductsFilter],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

}
