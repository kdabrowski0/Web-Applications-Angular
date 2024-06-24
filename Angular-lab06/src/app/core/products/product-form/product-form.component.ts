import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../shared/models/product.types';
import { ProductService } from '../../shared/services/product.service';
import { LastAddedProductService } from '../../shared/services/last-added-product.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  @Output() public productAdded: EventEmitter<Product> =
    new EventEmitter<Product>();
  public product: Product = {
    id: '',
    name: '',
    isBought: false,
    amount: 1,
    status: 'not-bought',
  };

  public constructor(
    private productService: ProductService,
    private lastAddedProductService: LastAddedProductService
  ) {}

  public get productName(): string {
    return this.product.name;
  }

  public set productName(value: string) {
    this.product.name = value;
  }

  public submitForm(): void {
    if (this.product.name.trim() !== '') {
      this.product.id = uuidv4();

      this.productService.addProduct(this.product);
      this.lastAddedProductService.setLastAddedProduct(this.product);
      this.productAdded.emit(this.product);
      this.product = {
        id: '',
        name: '',
        isBought: false,
        amount: 1,
        status: 'not-bought',
      };
    } else {
      console.log('Product name cannot be empty.');
    }
  }
}
