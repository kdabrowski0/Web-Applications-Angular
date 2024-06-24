import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../shared/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarEndpoints {
  private apiUrl: string = 'http://localhost:8080/api/cars';

  public constructor(private http: HttpClient) {}

  public getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  public getCarById(carId: string): Observable<Car> {
    const url: string = `${this.apiUrl}/${carId}`;

    return this.http.get<Car>(url);
  }

  public saveCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  public updateCar(carId: string, car: Car): Observable<Car> {
    const url: string = `${this.apiUrl}/${carId}`;

    return this.http.put<Car>(url, car);
  }

  public deleteCar(carId: string): Observable<void> {
    const url: string = `${this.apiUrl}/${carId}`;

    return this.http.delete<void>(url);
  }
}