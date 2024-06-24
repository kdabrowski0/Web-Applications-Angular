import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { TodoDetailsComponentComponent } from './core/todo-details-component/todo-details-component.component';
import { TodoFormComponentComponent } from './core/todo-form-component/todo-form-component.component';
import { TodoListComponentComponent } from './core/todo-list-component/todo-list-component.component';
import { TodoDetailsResolver } from './core/todo-details.resolver';
const routes: Routes = [
  { path: 'list', component: TodoListComponentComponent },
  {
    path: 'details/:id',
    component: TodoDetailsComponentComponent,
    resolve: {
      todo: TodoDetailsResolver,
    },
  },
  { path: 'form', component: TodoFormComponentComponent },
  { path: 'form/:id', component: TodoFormComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
