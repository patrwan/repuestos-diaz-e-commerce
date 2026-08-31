import { Injectable, signal } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  selectedCategories = signal<string[]>([]);

  filter(products: Product[]) {
    const categories = this.selectedCategories();

    if (categories.length === 0) {
      return products;
    }

    return products.filter(product =>
      categories.includes(product.category)
    );
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


