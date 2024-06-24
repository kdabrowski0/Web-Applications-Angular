import { Component, DoCheck, OnInit } from '@angular/core';
import { Car } from './core/shared/car.type';
import { initialCars } from './core/shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  public title: string = 'Projekt2';
  public cars: Car[] = [];
  public rentedCars: Car[] = [];
  public availableCarsCount: number = 0;
  public rentedCarsCount: number = 0;
  public totalCarsCount: number = 0;
  public isCarFormModalVisible: boolean = false;

  public ngOnInit(): void {
    setTimeout(() => {
      this.cars = initialCars;
    }, 2000);
  }

  public closeCarFormModal(): void {
    this.isCarFormModalVisible = false;
  }
  
  public ngDoCheck(): void {
    this.totalCarsCount = this.cars.length + this.rentedCars.length;
  }

  public onAddCar(newCar: Car): void {
    if (newCar.rented) {
      this.rentedCars = [...this.rentedCars, newCar];
    } else {
      this.cars = [...this.cars, newCar];
    }
  }

  public onRemoveCar(carId: string): void {
    this.cars = this.cars.filter((car: Car) => car.id !== carId);
    this.rentedCars = this.rentedCars.filter((car: Car) => car.id !== carId);
  }

  public onChangeRentedStatus(car: Car): void {
    car.rented = !car.rented;

    if (car.rented) {
      this.rentedCars = [...this.rentedCars, car];
      this.cars = this.cars.filter((c: Car) => c.id !== car.id);
    } else {
      this.cars = [...this.cars, car];
      this.rentedCars = this.rentedCars.filter((c: Car) => c.id !== car.id);
    }
  }

}
