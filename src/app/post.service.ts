import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})

export class PostService {
  
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // method to fetch post data
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      // error handling
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }
  

  // error handling method
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
// log messages with messageService
private log(message: string) {
  this.messageService.add(`PostService: ${message}`);
}
  

}