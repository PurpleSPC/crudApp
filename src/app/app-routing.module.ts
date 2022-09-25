import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostFormComponent } from './create-post-form/create-post-form.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent },
  {path: 'users', component: UsersComponent},
  {path: 'createPost', component: CreatePostFormComponent},
  {path:'', redirectTo: "/posts", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
