import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { POSTS } from '../mock-posts';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

}
