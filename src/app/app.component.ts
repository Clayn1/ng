import {Component} from '@angular/core';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';
import {PostModel} from '../models/PostModel';
import {CommentModel} from '../models/CommentModel';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';

@Component({
  selector: 'app-root',
  template: `<h1>Users</h1>
  <app-user *ngFor="let u of users" [user]="u"></app-user>
  <h1>Comments</h1>
  <app-comment *ngFor="let comment of comments" [comment]="comment"></app-comment>
  <h1>Posts</h1>
  <app-post *ngFor="let post of posts" [post]="post"></app-post>`,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];


  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
  }
}
