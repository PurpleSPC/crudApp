import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // method to fetch user data
  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  constructor() { }
}
