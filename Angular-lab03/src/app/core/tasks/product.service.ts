import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: { name: string; checked: boolean }[] = [];

  addProduct(productName: string) {
    if (productName && !this.products.find(p => p.name === productName)) {
      this.products.push({ name: productName, checked: false });
    }
  }

  getProducts() {
    return this.products;
  }

  removeProduct(productName: string) {
    this.products = this.products.filter(p => p.name !== productName);
  }

  checkProduct(productName: string) {
    const product = this.products.find(p => p.name === productName);
    if (product) {
      product.checked = !product.checked;
    }
  }

  removeSelectedProducts() {
    this.products = this.products.filter(product => !product.checked);
  }

  isProductChecked(productName: string) {
    const product = this.products.find(p => p.name === productName);
    return product && product.checked;
  }
}