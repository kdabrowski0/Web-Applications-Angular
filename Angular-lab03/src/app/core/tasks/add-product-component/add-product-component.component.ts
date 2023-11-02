import { Component } from '@angular/core';
import { ProductService } from '../product.service'; 
import { AlertService } from '../alert/alert.service';
@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.scss'],
})
export class AddProductComponentComponent {
  productName = '';

  constructor(
    private productService: ProductService,
    private alertService: AlertService
  ) {}

  addProduct() {
    if (this.productName) {
      if (this.productService.getProducts().some(product => product.name === this.productName)) {
        this.alertService.showAlert('Produkt już istnieje na liście.');
      } else {
        this.productService.addProduct(this.productName);
      }
      this.productName = '';
    } else {
      this.alertService.showAlert('Nazwa produktu nie może być pusta.');
    }
  }

}
