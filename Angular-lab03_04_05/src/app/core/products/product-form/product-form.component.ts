import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  @Output() public productAdded: EventEmitter<Product> = new EventEmitter<Product>();
  public product: Product = new Product(0, '', false, 1, 'not-bought'); 

  public get productName(): string {
    return this.product.getName();
  }

  public set productName(value: string) {
    this.product.setName(value);
  }

  public submitForm(): void {
    this.productAdded.emit(this.product);
    this.product = new Product(0, '', false, 1, 'not-bought'); 
  }
}
