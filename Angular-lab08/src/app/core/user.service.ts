import { Injectable } from '@angular/core';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];
  public constructor() {
    this.users = [
      {
        id: uuidv4(),
        name: 'John',
        surname: 'Doe',
        age: 20,
        postalCode: '1000',
      },
    ];
  }
  public getUsers(): User[] {
    return this.users;
  }
  public getUser(id: string): User | undefined {
    const foundUser: User | undefined = this.users.find(
      (user: User) => user.id === id
    );
  
    return foundUser;
  }
  public addUser(user: User): void {
    const foundUser: User | undefined = this.users.find(
      (u: User) => u.id === user.id
    );

    if (foundUser === undefined) {
      this.users.push(user);
    } else {
      throw new Error(`User with id ${user.id} already exists`);
    }
  }
}
