import {Component} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {UserService} from '../../services/user.service';
import {PostModel} from '../../../models/PostModel';
import {CommentModel} from '../../../models/CommentModel';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserModel[] = [];
  posts: PostModel[] = [];
  comments: CommentModel[] = [];


  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) {
    this.userService.getUsers().subscribe(users => {
      this.postService.getPosts().subscribe(posts => {
        this.commentService.getComments().subscribe(comments => {
          this.posts = posts;
          this.comments = comments;
          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
              }
            }
            this.users.push(user);
          }
        });
      });
    });
  }
}
