import { Component, computed, inject } from '@angular/core';

import { ProductFilterService } from '../../services/product-filter';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  private filterService = inject(ProductFilterService);

  products: Product[] = [
    {
      id: 1,
      name: 'Aceite Sintético 5W-30 4L',
      category: 'Aceites',
      brand: 'Motul',
      price: 42990,
      stock: 10,
      description: 'Aceite sintético de alto rendimiento.',
      image: 'assets/products/aceite-5w30.webp'
    },
    {
      id: 2,
      name: 'Filtro de Aceite Toyota Corolla',
      category: 'Filtros',
      brand: 'Bosch',
      price: 7990,
      stock: 15,
      description: 'Filtro de aceite de alta calidad.',
      image: 'assets/products/filtro-aceite.webp'
    }
  ];

  filteredProducts = computed(() =>
    this.filterService.filter(this.products)
  );

}


