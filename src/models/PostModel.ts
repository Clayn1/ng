import {CommentModel} from './CommentModel';

export class PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: CommentModel[];
}
