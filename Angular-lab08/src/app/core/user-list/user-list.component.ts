import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public constructor(private userService: UserService) {}
  public ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
