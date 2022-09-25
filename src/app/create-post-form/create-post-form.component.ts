import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {

  users: User[]=[]

  selectedUser?: User;

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(userId:number, title: string, body:string): void {
    
  }


  constructor(
    private postService: PostService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }
}
