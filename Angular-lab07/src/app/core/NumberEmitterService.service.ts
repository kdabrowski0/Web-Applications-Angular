import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberEmitterService {
  private numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public getNumberObservable(): Observable<number[]> {
    return of(this.numbers);
  }
}