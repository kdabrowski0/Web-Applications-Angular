import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.scss']
})
export class ShoppingListComponentComponent {
  products: { name: string, checked: boolean }[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  removeProduct(productName: string) {
    this.productService.removeProduct(productName);
  }

  checkProduct(product: { name: string, checked: boolean }) {
    this.productService.checkProduct(product.name);
  }

  get productServicePublic() {
    return this.productService;
  }

  removeSelectedProducts() {
    this.productService.removeSelectedProducts();
  }
}
