import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './core/modules/components/car-list/car-list.component';
import { CarDetailsComponent } from './core/modules/components/car-details/car-details.component';
import { PageNotFoundComponent } from './core/layout/page-not-found/page-not-found.component';
import { CarFormComponent } from './core/modules/components/car-form/car-form.component';
const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'add-car', component: CarFormComponent },
  { path: 'edit-car/:id', component: CarFormComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
