import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product.types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public purchasedProducts: Product[] = [];
  public alertMessage: string = '';
  public modalsVisible: { [key: string]: boolean } = {};

  public constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.registerOnChange(() => {
      this.products = this.productService.products;
      this.products.forEach((product: Product) => (this.modalsVisible[product.name] = false));
    });

    this.productService.loadProductsFromLocalStorage();
  }
  public openModal(product: Product): void {
    this.modalsVisible[product.name] = true;
  }

  public closeModal(product: Product): void {
    this.modalsVisible[product.name] = false;
  }

  public closeAlert(message: string): void {
    this.alertMessage = message;
  }

  public onProductAdded(product: Product): void {
    this.productService.addProduct(product);
    console.log(this.products);
  }

  public onDeleteProduct(product: Product): void {
    this.openModal(product);
  }

  public confirmDeleteProduct(product: Product): void {
    this.productService.deleteProduct(product);
    this.closeModal(product);
  }

  public onDeleteBought(): void {
    const checkedProducts: Product[] = this.products.filter((p: Product) => p.isBought);

    this.productService.deleteBoughtProducts();

    this.purchasedProducts.push(
      ...checkedProducts.map((product: Product) => {
        product.status = 'bought';

        return product;
      })
    );
    
    this.purchasedProducts = this.purchasedProducts.sort((a: Product, b: Product) =>
      a.purchaseDate && b.purchaseDate
        ? a.purchaseDate.getTime() - b.purchaseDate.getTime()
        : 0
    );
  }

  public areAnyProductsChecked(): boolean {
    return this.products.some((product: Product) => product.isBought);
  }

  public incrementAmount(product: Product): void {
    product.amount++;
  }

  public decrementAmount(product: Product): void {
    product.amount--;
  }
}
