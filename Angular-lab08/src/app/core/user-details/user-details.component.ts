import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  public user: User | undefined;

  public constructor(private userService: UserService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const userId: string = params['id'];
      this.getUser(userId);
    });
  }

  public getUser(id: string): void {
    const foundUser: User | undefined = this.userService.getUser(id);
    this.user = foundUser;
  }
}
