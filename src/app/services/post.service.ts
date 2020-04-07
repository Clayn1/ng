import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
