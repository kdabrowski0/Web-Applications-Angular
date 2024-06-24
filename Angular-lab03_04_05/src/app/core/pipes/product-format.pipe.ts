import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Pipe({
  name: 'productFormat',
  pure: false,
})
export class ProductFormatPipe implements PipeTransform {
  public transform(product: Product): string {
    if (product.getName()) {
      const formattedName: string  = product.getName().charAt(0).toUpperCase() + product.getName().slice(1);
      
      return `${formattedName} (ilość: ${product.getAmount() || 0})`;
    }

    return '';
  }
}
