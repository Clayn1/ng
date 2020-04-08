import {PostModel} from './PostModel';

export class UserModel {
  id: number;
  name: string;
  username: string;
  website: string;
  posts: PostModel[];
}
