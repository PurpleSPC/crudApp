import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CreatePostFormComponent } from './create-post-form/create-post-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    MessageComponent,
    CreatePostFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
