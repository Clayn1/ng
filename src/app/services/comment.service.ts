import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {CommentModel} from '../../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
