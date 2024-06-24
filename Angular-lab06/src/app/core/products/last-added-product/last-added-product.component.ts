import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.types';
import { LastAddedProductService } from '../../shared/services/last-added-product.service';
@Component({
  selector: 'app-last-added-product',
  templateUrl: './last-added-product.component.html',
  styleUrls: ['./last-added-product.component.scss'],
})
export class LastAddedProductComponent implements OnInit {
  public lastAddedProduct$: Observable<Product | null>;

  public constructor(private lastAddedProductService: LastAddedProductService) {
    this.lastAddedProduct$ = this.lastAddedProductService.lastAddedProduct$;
  }

  public ngOnInit(): void {
    this.lastAddedProduct$ = this.lastAddedProductService.lastAddedProduct$;
  }
}
