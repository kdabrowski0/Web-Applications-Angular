import { Component, OnInit } from '@angular/core';
import { CarEndpoints } from '../../../features/CarEndpoints.service';
import { Car } from 'src/app/core/shared/car.model';
import { CarUpdateService } from 'src/app/core/features/CarUpdate.service';
import { PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  providers: [CarEndpoints],
})
export class CarListComponent implements OnInit {
  public cars: Car[] = [];
  public currentPage: number = 1;
  public pageSize: number = 5;
  public totalCarsCount: number = 0;
  public pageSlice: Car[] = this.cars.slice(0, this.pageSize);
  public isFetching: boolean = false;
  public filterByCompany: string = 'all';
  public filterByEmptyColor: boolean = false;
  public uniqueCompanyNames: string[] = [];
  public filterByModel: string = '';

  public constructor(
    private carEndpoints: CarEndpoints,
    private carUpdateService: CarUpdateService,
  ) {}

  public ngOnInit(): void {
    this.isFetching = true;
    this.loadCars();
    this.carUpdateService.carUpdated$.subscribe(() => {
      this.loadCars();
    });
  }

  public loadCars(): void {
    this.carEndpoints.getAllCars().subscribe((allCars: Car[]) => {
      this.totalCarsCount = allCars.length;
      this.cars = allCars.map((car: Car) => ({
        ...car,
        createDate: new Date(car.createDate),
      }));

      this.uniqueCompanyNames = this.getUniqueCompanyNames(this.cars);

      this.applyFilters();

      this.pageSlice = this.cars.slice(0, this.pageSize);
      this.isFetching = false;
    });
  }

  public onPageChange(event: PageEvent): void {
    const startIndex: number = event.pageIndex * event.pageSize;
    const endIndex: number = startIndex + event.pageSize;

    this.currentPage = event.pageIndex + 1;

    this.pageSlice = this.cars.slice(startIndex, endIndex);
  }

  public sortCarsByDate(): void {
    this.cars.sort(
      (a: Car, b: Car) => a.createDate.getTime() - b.createDate.getTime(),
    );
    this.pageSlice = this.cars.slice(0, this.pageSize);
  }

  public sortCarsByYear(): void {
    this.cars.sort((a: Car, b: Car) => a.carYear - b.carYear);
    this.pageSlice = this.cars.slice(0, this.pageSize);
  }

  public sortCarsByCompanyName(): void {
    this.cars.sort((a: Car, b: Car) =>
      a.carCompanyName.localeCompare(b.carCompanyName),
    );
    this.pageSlice = this.cars.slice(0, this.pageSize);
  }

  public onSortChange(event: MatSelectChange): void {
    const sortBy: string = event.value;

    switch (sortBy) {
    case 'date':
      this.sortCarsByDate();
      break;
    case 'year':
      this.sortCarsByYear();
      break;
    case 'company':
      this.sortCarsByCompanyName();
      break;
    default:
      break;
    }
  }

  private applyFilters(): void {
    this.cars = this.cars.filter((car: Car) => {
      const companyNameFilter: boolean =
        this.filterByCompany === 'all' ||
        car.carCompanyName === this.filterByCompany;

      const emptyColorFilter: boolean =
        !this.filterByEmptyColor || car.carColors.length > 0;
      
      const modelFilter: boolean =
        !this.filterByModel || car.carModel.toLowerCase().includes(this.filterByModel.toLowerCase());

      return companyNameFilter && emptyColorFilter && modelFilter;
    });

    this.totalCarsCount = this.cars.length;

    this.currentPage = 1;
    this.pageSlice = this.cars.slice(0, this.pageSize);
  }

  public updateEmptyColorFilter(): void {
    this.filterByEmptyColor = !this.filterByEmptyColor;
    this.loadCars();
  }

  private getUniqueCompanyNames(cars: Car[]): string[] {
    const uniqueNames: Set<string> = new Set<string>();
    cars.forEach((car: Car) => {
      uniqueNames.add(car.carCompanyName.toLowerCase());
    });

    return Array.from(
      uniqueNames,
      (name: string) => name.charAt(0).toUpperCase() + name.slice(1),
    );
  }

  public updateCompanyFilter(event: MatSelectChange): void {
    this.filterByCompany = event.value;
    this.loadCars();
  }

  public updateModelFilter(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.filterByModel = target.value;
    this.loadCars();
  }
}
