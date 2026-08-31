import { Injectable, signal } from '@angular/core';

import { Product } from '../models/product.model';

import { SortOption } from '../models/sort-option.model';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  selectedCategories = signal<string[]>([]);
  selectedSort = signal<SortOption>('relevance');

  setSort(sort: SortOption) {
    this.selectedSort.set(sort);
  }



  filter(products: Product[]) {
    const categories = this.selectedCategories();

    let filteredProducts = categories.length === 0
      ? [...products]
      : products.filter(product =>
        categories.includes(product.category)
      );

    switch (this.selectedSort()) {
      case 'price-low':
        return filteredProducts.sort((a, b) => a.price - b.price);

      case 'price-high':
        return filteredProducts.sort((a, b) => b.price - a.price);

      case 'name':
        return filteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      default:
        return filteredProducts;
    }
  }

  toggleCategory(category: string) {
    this.selectedCategories.update(categories => {
      if (categories.includes(category)) {
        return categories.filter(c => c !== category);
      }

      return [...categories, category];
    });
  }
}


