import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/models/product.types';

@Pipe({
  name: 'productFormat',
  pure: false,
})
export class ProductFormatPipe implements PipeTransform {
  public transform(product: Product): string {
    if (product.name) {
      const formattedName: string  = product.name.charAt(0).toUpperCase() + product.name.slice(1);
      
      return `${formattedName} (ilość: ${product.amount|| 0})`;
    }

    return '';
  }
}
