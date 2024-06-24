import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { CarFormatPipe } from './shared/car.pipe';
@NgModule({
  declarations: [CarListComponent, CarFormComponent, ConfirmationModalComponent, CarFormatPipe],
  imports: [CommonModule, FormsModule],
  exports: [CarListComponent, CarFormComponent, ConfirmationModalComponent, CarFormatPipe],
})
export class CoreModule {}
