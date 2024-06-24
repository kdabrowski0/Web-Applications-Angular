import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { Car } from '../../shared/car.type';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnChanges, OnInit {
  @Input() public cars: Car[] = [];
  @Input() public rentedCars: Car[] = [];
  @Input() public availableCarsCount: number = 0;
  @Input() public rentedCarsCount: number = 0;
  @Input() public totalCarsCount: number = 0;
  @Output() public deleteCar: EventEmitter<string> = new EventEmitter<string>();
  @Output() public changeRentedStatus: EventEmitter<Car> =
    new EventEmitter<Car>();
  @Output() public closeModalEvent: EventEmitter<void> =
    new EventEmitter<void>();
  public modalMessage: string = '';
  public isConfirmationModalVisible: boolean = false;
  public carToDeleteId: string = '';

  public openModal(car: Car): void {
    this.modalMessage = `Are you sure you want to delete ${car.companyName} ${car.model} ${car.year}?`;
    this.carToDeleteId = car.id;
    this.isConfirmationModalVisible = true;
  }

  public closeModal(): void {
    this.isConfirmationModalVisible = false;
    this.closeModalEvent.emit();
  }

  public confirmModalAction(isConfirmed: boolean): void {
    if (isConfirmed) {
      this.deleteCar.emit(this.carToDeleteId);
    }
    this.isConfirmationModalVisible = false;
  }

  public ngOnInit(): void {
    this.updateCounts();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    this.updateCounts();
  }

  private updateCounts(): void {
    this.availableCarsCount = this.cars.length;
    this.rentedCarsCount = this.rentedCars.length;
  }

  public onChangeRentedStatus(car: Car): void {
    this.changeRentedStatus.emit(car);
  }

  public onDeleteCar(car: Car): void {
    this.modalMessage = `Are you sure you want to delete ${car.companyName} ${car.model} ${car.year}?`;
    this.carToDeleteId = car.id;
    this.isConfirmationModalVisible = true;
  }
}
