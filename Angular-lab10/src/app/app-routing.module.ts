import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManageFormComponent } from './core/user-manage-form/user-manage-form.component';

const routes: Routes = [
  { path: 'users/:id', component: UserManageFormComponent },
  { path: 'users', component: UserManageFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
