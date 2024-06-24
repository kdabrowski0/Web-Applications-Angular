import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserManageFormComponent } from './user-manage-form/user-manage-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './userService.service';
import { FormService } from './userForm.service';
@NgModule({
  declarations: [UserManageFormComponent, UserListComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UserService, FormService],
  exports: [UserManageFormComponent, UserListComponent],
})
export class CoreModule {}
