import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavComponentComponent,
    HomeComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
  ],
  imports: [CommonModule, RouterModule, AppRoutingModule, FormsModule],
  providers: [UserService],
  exports: [
    PageNotFoundComponent,
    NavComponentComponent,
    HomeComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
  ],
})
export class CoreModule {}
