import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})

export class PostService {
  
  posts:Post[] = [];
  
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  // method to fetch post data vai http
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      // error handling
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  // method to get post by id
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url)
      .pipe(
        tap(_ => this.log(`fetched post id=${id}`)),
        catchError(this.handleError<Post>(`getPost id=${id}`))
      );
  }

  //CREATE post
  createPost(post:Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions)
      .pipe(
        tap((newPost: Post) => this.log (`Post submitted. Post id = ${newPost.id}`)),
        catchError(this.handleError<Post>('addPost'))
      );
  }

  // UPDATE post
  updatePost(post:Post): Observable<Post> {
    return this.http.put<Post>(this.postsUrl, post, this.httpOptions)
      .pipe(
        tap((newPost: Post) => this.log (`Post submitted. Post id = ${newPost.id}`)),
        catchError(this.handleError<Post>('addPost'))
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