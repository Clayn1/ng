import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../models/CommentModel';
import {PostModel} from '../../models/PostModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post: PostModel;

  constructor() {
  }

}
