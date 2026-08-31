import { Component } from '@angular/core';
import { ProductsFilter } from '../../components/products-filter/products-filter';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-products',
  imports: [ProductsFilter, ProductList],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

}
