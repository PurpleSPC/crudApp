import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  // error handling method
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  // method to fetch post data
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      // error handling
      .pipe(
        catchError(this.handleError<Post[]>('getPosts', []))
      )
  }

  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  

  constructor(
    private http: HttpClient,
  ) { }
}
