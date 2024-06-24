import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor() {
    const storedUsers = JSON.parse(
      localStorage.getItem('users') || '[]',
    ) as User[];
    this.usersSubject.next(storedUsers);
  }

  private updateUsers(users: User[]): void {
    this.usersSubject.next(users);
    localStorage.setItem('users', JSON.stringify(users));
  }

  public addUser(user: User): void {
    user.id = uuidv4();
    const updatedUsers = [...this.usersSubject.value, user];
    this.updateUsers(updatedUsers);
  }
  
  public updateUser(user: User): void {
    const updatedUsers = this.usersSubject.value.map((u) =>
      u.id === user.id ? user : u
    );
    this.updateUsers(updatedUsers);
  }

  public getUserById(id: string): User | undefined {
    return this.usersSubject.value.find((u) => u.id === id);
  }
}
