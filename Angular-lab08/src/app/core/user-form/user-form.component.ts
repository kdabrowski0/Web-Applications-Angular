import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  public user: User = {
    id: '',
    name: '',
    surname: '',
    age: 0,
    postalCode: '',
  };
  public constructor(private userService: UserService, private router: Router) {}
  public onSubmit(): void {
    this.user.id = uuidv4();
    this.userService.addUser(this.user);
    this.resetForm();
    this.router.navigate(['/users']);
  }
  private resetForm(): void {
    this.user = {
      id: '',
      name: '',
      surname: '',
      age: 0,
      postalCode: '',
    };
  }
}
