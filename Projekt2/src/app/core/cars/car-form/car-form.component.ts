import { Component, Output, EventEmitter } from '@angular/core';
import Car from '../../shared/car.type';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent {
  @Output() public addCar: EventEmitter<Car> = new EventEmitter<Car>();
  @Output() public closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  public isConfirmationModalVisible: boolean = false;

  public newCar: Car = {
    id: '',
    companyName: '',
    model: '',
    year: 1769,
    rented: false,
  };

  public onSubmit(): void {
    if (this.isCarValid()) {
      this.isConfirmationModalVisible = true;
    } else {
      console.log('Fill out all fields');
    }
  }

  public confirmAddCar(): void {
    this.newCar.id = uuidv4();
    this.addCar.emit({ ...this.newCar });
    this.resetForm();
    this.closeConfirmationModal();
  }

  private resetForm(): void {
    this.newCar = {
      id: '',
      companyName: '',
      model: '',
      year: 1769,
      rented: false,
    };
  }

  private isCarValid(): boolean {
    return (
      this.newCar.companyName.trim() !== '' &&
      this.newCar.model.trim() !== '' &&
      this.newCar.year > 1768
    );
  }

  public closeConfirmationModal(): void {
    this.isConfirmationModalVisible = false;
    this.closeModalEvent.emit();
  }
}
