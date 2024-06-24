import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './numbers/numbers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DataComponent } from './data/data.component';
@NgModule({
  declarations: [
    NumbersComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponentComponent,
    DataComponent,
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [
    NumbersComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponentComponent,
    DataComponent,
  ],
})
export class CoreModule {}
