import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../models/product.types';

@Injectable({
  providedIn: 'root',
})
export class LastAddedProductService {
  private lastAddedProductSubject: Subject<Product> = new Subject<Product>();
  public lastAddedProduct$: Observable<Product> = this.lastAddedProductSubject.asObservable();

  public setLastAddedProduct(product: Product): void {
    this.lastAddedProductSubject.next(product);
  }
}