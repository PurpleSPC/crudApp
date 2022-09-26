import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {
  posts: Post[] = [];

  users: User[] = [];

  newPost: Post = {
    id: this.genId(this.posts),
    userId: 0,
    title: '',
    body: ''
  }; 


  postForm = this.formBuilder.group({
    userId: '',
    title: '',
    body: ''
  })

  onSubmit(): void {
    this.postService.createPost(this.newPost);
    console.log(`post id ${this.newPost.id} has been submitted`)
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  add(userId:number, title: string, body:string): void {
    
  }

    // method to generate an id# for each post
    genId(posts: Post[]): number {
      return posts.length > 0? Math.max(...posts.map(post => post.id)) +1 : 11;
    }
  


  constructor(
    private postService: PostService,
    private userService: UserService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }
}
