import { Component, OnInit } from '@angular/core';
import { getInitialShoppingList } from '../../shared/data';
import { Product } from '../../shared/models/product.model';
import { ProductFormatPipe } from '../../pipes/product-format.pipe';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductFormatPipe],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public purchasedProducts: Product[] = [];
  public alertMessage: string = '';
  public modalsVisible: { [key: string]: boolean } = {};
  public productsToDelete: Product[] = [];

  public ngOnInit(): void {
    getInitialShoppingList().then((initialList: Product[]) => {
      this.products = initialList;
      this.products.forEach(
        (product: Product) => (this.modalsVisible[product.getName()] = false)
      );
    });
  }
  public openModal(product: Product): void {
    this.modalsVisible[product.getName()] = true;
  }

  public closeModal(product: Product): void {
    this.modalsVisible[product.getName()] = false;
  }

  public closeAlert(message: string): void {
    this.alertMessage = message;
  }

  public onProductAdded(product: Product): void {
    const found: Product | undefined = this.products.find(
      (prod: Product) => prod.getName() === product.getName()
    );
    if (found !== undefined || product.getName() == '') {
      this.closeAlert(
        'Taki produkt juz istnieje albo produkt nie moze miec pustej nazwy'
      );
    } else {
      this.products.push(product);
    }
  }

  public onDeleteProduct(product: Product): void {
    this.openModal(product);
  }

  public confirmDeleteProduct(product: Product): void {
    this.products = this.products.filter((p: Product) => p !== product);
    this.closeModal(product);
  }

  public onDeleteBought(): void {
    const checkedProducts: Product[] = this.products.filter((p: Product) =>
      p.getChecked()
    );

    this.products = this.products.filter(
      (product: Product) =>
        !checkedProducts.find(
          (prod: Product) => product.getName() == prod.getName()
        )
    );

    this.purchasedProducts.push(
      ...checkedProducts.map((product: Product) => {
        product.setStatus('bought');

        return product;
      })
    );
  }

  public areAnyProductsChecked(): boolean {
    return this.products.some((product: Product) => product.getChecked());
  }

  public incrementAmount(product: Product): void {
    product.setAmount(product.getAmount() + 1);
  }

  public decrementAmount(product: Product): void {
    product.setAmount(Math.max(0, product.getAmount() - 1));
  }
}
