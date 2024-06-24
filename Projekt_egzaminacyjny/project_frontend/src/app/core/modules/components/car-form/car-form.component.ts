import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { CarFormService } from 'src/app/core/features/CarForm.service';
import { CarEndpoints } from 'src/app/core/features/CarEndpoints.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarUpdateService } from 'src/app/core/features/CarUpdate.service';
import { Car } from 'src/app/core/shared/car.model';
@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit {
  public isEditMode: boolean = false;
  public constructor(
    public carFormService: CarFormService,
    private carEndpoints: CarEndpoints,
    private route: ActivatedRoute,
    private router: Router,
    private carUpdateService: CarUpdateService,
  ) {}

  public ngOnInit(): void {
    const carId: string = this.route.snapshot.paramMap.get('id') || '';
    this.isEditMode = !!carId;
    this.carFormService.resetForm();
    if (this.isEditMode) {
      this.carEndpoints.getCarById(carId).subscribe(
        (car: Car) => {
          this.carFormService.loadCarIntoForm(car);
        },
        (error: Error) => {
          console.error('Error fetching car:', error);
          this.router.navigate(['/not-found']);
        },
      );
    }
  }

  public addColor(): void {
    this.carFormService.addColor();
  }
  public removeColor(index: number): void {
    this.carFormService.removeColor(index);
  }
  public submitForm(): void {
    if (this.carFormService.carForm.valid) {
      const car: Car = this.carFormService.carForm.value as Car;
      if (this.isEditMode) {
        this.carFormService.updateCar(car.carId);
      } else {
        this.carFormService.addCar();
      }
      this.carUpdateService.updateCarList();
    }
    this.carFormService.resetForm();
    this.router.navigate(['/cars']);
  }

  public getColors(): AbstractControl[] {
    return (this.carFormService.carForm.get('carColors') as FormArray).controls;
  }

  public cancel(): void {
    this.carFormService.resetForm();
    this.router.navigate(['/cars']);
  }
}
