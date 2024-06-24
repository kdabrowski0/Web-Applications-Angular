import { Component, OnInit } from '@angular/core';
import { NumberEmitterService } from '../NumberEmitterService.service';
import {  map } from 'rxjs/operators';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
  providers: [NumberEmitterService]
})
export class NumbersComponent implements OnInit {
  public evenNumbers: number[] = [];

  public constructor(private numberEmitterService: NumberEmitterService) {}

  public ngOnInit(): void {
    this.numberEmitterService
      .getNumberObservable()
      .pipe(
        map((numbers: number[]) => numbers.filter((number: number) => number % 2 === 0))
      )
      .pipe(
        map((numbers: number[]) => numbers.map((number: number) => number * number))
      )
      .subscribe((evenNumbers: number[]) => {
        this.evenNumbers = evenNumbers;
      });
  }
}