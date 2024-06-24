import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TodoDetailsComponentComponent } from './todo-details-component/todo-details-component.component';
import { TodoFormComponentComponent } from './todo-form-component/todo-form-component.component';
import { HttpService } from './httpservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from './navigation.service';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavComponentComponent,
    HomeComponent,
    TodoListComponentComponent,
    TodoDetailsComponentComponent,
    TodoFormComponentComponent,

  ],
  imports: [CommonModule, RouterModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpService, NavigationService],
  exports: [
    PageNotFoundComponent,
    NavComponentComponent,
    HomeComponent,
    TodoListComponentComponent,
    TodoDetailsComponentComponent,
    TodoFormComponentComponent,
  ],
})
export class CoreModule {}
