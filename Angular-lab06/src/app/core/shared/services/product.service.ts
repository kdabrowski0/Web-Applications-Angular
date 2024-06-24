import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[] = [];
  private onChangeCallbacks: (() => void)[] = [];

  public loadProductsFromLocalStorage(): void {
    const storedProductsJson: string | null =
      localStorage.getItem('shoppingList');
    if (storedProductsJson) {
      const storedProducts: Product[] = JSON.parse(storedProductsJson).sort(
        (a: Product, b: Product) => a.name.localeCompare(b.name)
      );
      this.products = storedProducts;
      this.notifyChanges();
    }
  }

  public registerOnChange(callback: () => void): void {
    this.onChangeCallbacks.push(callback);
  }

  public notifyChanges(): void {
    this.onChangeCallbacks.forEach((callback: () => void) => callback());
  }

  public addProduct(product: Product): void {
    const found: Product | undefined = this.products.find(
      (prod: Product) => prod.name === product.name
    );

    if (found !== undefined || product.name === '') {
      console.log(
        'Product with the same name already exists or name is empty.'
      );
    } else {
      this.products.push(product);
      this.sortProducts();
      this.saveProductsToLocalStorage();
      this.notifyChanges();
    }
  }

  public deleteProduct(product: Product): void {
    this.products = this.products.filter((p: Product) => p !== product);
    this.saveProductsToLocalStorage();
    this.notifyChanges();
  }

  public deleteBoughtProducts(): void {
    const currentDate: Date = new Date(); 

    this.products = this.products.filter((product: Product) => {
      if (product.isBought) {
        product.purchaseDate = currentDate;
      }

      return !product.isBought;
    });

    this.saveProductsToLocalStorage();
    this.notifyChanges();
  }

  private saveProductsToLocalStorage(): void {
    localStorage.setItem('shoppingList', JSON.stringify(this.products));
  }

  private sortProducts(): void {
    this.products = this.products.sort((a: Product, b: Product) =>
      a.name.localeCompare(b.name)
    );
  }
}
