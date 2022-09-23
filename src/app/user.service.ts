import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  // method to fetch user data
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
