import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarUpdateService {
  private carUpdatedSource: Subject<void> = new Subject<void>();

  public carUpdated$: Observable<void> = this.carUpdatedSource.asObservable();

  public updateCarList(): void {
    this.carUpdatedSource.next();
  }
}
