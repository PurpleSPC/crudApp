import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // method to fetch post data
  getPosts(): Observable<Post[]> {
    const posts = of(POSTS);
    return posts;
  }
  

  constructor() { }
}
