import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public constructor(private location: Location, private router: Router) {}

  public goBack(): void {
    this.location.back();
  }
  public goToTodos(): void {
    this.router.navigate(['/list']);
  }
}