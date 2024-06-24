import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Car } from '../shared/car.model';
import { CarEndpoints } from './CarEndpoints.service';
@Injectable({
  providedIn: 'root',
})
export class CarFormService {
  public carForm: FormGroup = new FormGroup({});

  public constructor(
    private formBuilder: FormBuilder,
    private carEndpoints: CarEndpoints,
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.carForm = this.createCarForm();
  }

  public containsOnlyStringsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value as string;
      if (!value) {
        return null;
      }
      if (!/^[a-zA-Z]+$/.test(value)) {
        return { containsOnlyStrings: true };
      }

      return null;
    };
  }

  private createCarForm(): FormGroup {
    return this.formBuilder.group({
      carId: this.formBuilder.control(null),
      carCompanyName: this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^\S.*\S$/),
        this.containsOnlyStringsValidator(),
      ]),
      carModel: this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^\S.*\S$/),
      ]),
      carYear: this.formBuilder.control(null, [
        Validators.required,
        Validators.min(1886),
        Validators.max(2024),
      ]),
      carCreatedAt: this.formBuilder.control(null),
      carColors: this.formBuilder.array([]),
    });
  }

  public addColor(): void {
    const carColors: FormArray = this.carForm.get('carColors') as FormArray;
    carColors.push(
      this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^\S.*\S$/),
        this.containsOnlyStringsValidator(),
      ]),
    );
  }

  public removeColor(index: number): void {
    const carColors: FormArray = this.carForm.get('carColors') as FormArray;
    if (index >= 0 && index < carColors.length) {
      carColors.removeAt(index);
    }
  }

  public resetForm(): void {
    this.carForm.reset();
    (this.carForm.get('carColors') as FormArray).clear();
  }
  public addCar(): void {
    if (this.carForm.valid) {
      const car: Car = this.carForm.value as Car;
      this.carEndpoints.saveCar(car).subscribe(
        (savedCar: Car) => {
          this.carEndpoints.saveCar(savedCar);
          this.resetForm();
        },
        (error: Error) => {
          console.error('Error adding car:', error);
        },
      );
    }
  }

  public updateCar(carId: string): void {
    if (this.carForm.valid) {
      const car: Car = this.carForm.value as Car;
      this.carEndpoints.updateCar(carId, car).subscribe(
        () => {
          this.carEndpoints.updateCar(carId, car);
          this.resetForm();
        },
        (error: Error) => {
          console.error('Error updating car:', error);
        },
      );
    }
  }

  public loadCarIntoForm(car: Car): void {
    this.carForm.patchValue({
      carId: car.carId,
      carCompanyName: car.carCompanyName,
      carModel: car.carModel,
      carCreatedAt: car.createDate,
      carYear: car.carYear,
    });

    const carColors: FormArray = this.carForm.get('carColors') as FormArray;
    car.carColors.forEach((color: string) => {
      carColors.push(this.formBuilder.control(color, Validators.required));
    });
  }
}
