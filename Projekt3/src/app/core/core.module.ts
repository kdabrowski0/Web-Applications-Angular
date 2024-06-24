import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { KochamAngularaDirective } from './kocham-angulara.directive';
import { StatusComponentComponent } from './status-component/status-component.component';
import { DataComponentComponent } from './data-component/data-component.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor'; 
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpService } from './http.service';
import { DisableLinkDirective } from './disable-link.directive';

@NgModule({
  declarations: [ 
    KochamAngularaDirective, StatusComponentComponent, DataComponentComponent, AppNavigationComponent, TodoListComponent, DisableLinkDirective, 
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, HttpService  ],
  exports: [ StatusComponentComponent, DataComponentComponent, AppNavigationComponent, KochamAngularaDirective, TodoListComponent, DisableLinkDirective],
})
export class CoreModule {}
