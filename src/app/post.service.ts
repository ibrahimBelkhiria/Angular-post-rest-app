import {ApplicationRef, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post/Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

   private URL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL + '/posts');

  }


  getOnePost(id: number) {
      return this.http.get(this.URL + '/post/' + id);
  }
  addPost(post: Post) {

      return this.http.post(this.URL + '/post/add' , post);

  }
  updatePost(post: Post, id: number) {
      return this.http.put(this.URL + '/post/' + id, post);
  }

  deletePost(id: number) {

      return this.http.delete(this.URL + '/post/' + id);
  }

}
