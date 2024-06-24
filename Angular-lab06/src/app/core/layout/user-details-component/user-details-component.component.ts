import { Component} from '@angular/core';
import { UserData, user } from './user-data';
@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.scss']
})
export class UserDetailsComponentComponent{
  public user: UserData = user; 

  public getName(): string {
    return `Nazywasz się ${this.user.firstName} ${this.user.lastName}`;
  }

}
