import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponentComponent } from './core/status-component/status-component.component';
import { DataComponentComponent } from './core/data-component/data-component.component';
import { authGuard } from './core/auth.guard';
import { TodoListComponent } from './core/todo-list/todo-list.component';
const routes: Routes = [
  { path: 'set-status', component: StatusComponentComponent },
  { path: 'data', component: DataComponentComponent, canActivate: [authGuard] },
  { path: 'todos', component: TodoListComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
