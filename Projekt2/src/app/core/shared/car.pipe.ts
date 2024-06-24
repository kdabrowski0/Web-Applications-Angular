import { Pipe, PipeTransform } from '@angular/core';
import Car from './car.type';

@Pipe({
  name: 'carFormat'
})
export class CarFormatPipe implements PipeTransform {
  public transform(car: Car): string {
    const formattedCompanyName: string = car.companyName.charAt(0).toUpperCase() + car.companyName.slice(1);
    const formattedModel: string = car.model.charAt(0).toUpperCase() + car.model.slice(1);

    return `${formattedCompanyName} ${formattedModel} (${car.year}) - Rented: ${car.rented ? 'Yes' : 'No'}`;
  }
}