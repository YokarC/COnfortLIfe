import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  API_URI = 'http://localhost:3000/api';
  //Constructor para manejar las peticiones
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(`${this.API_URI}/posts`);
  }

  getPost(id: string){
    return this.http.get( `${this.API_URI}/posts/${id}`);
  }

  deletePost(id: string){
    return this.http.delete(`${this.API_URI}/posts/${id}`);
  }

  //Puede haber un problema con el post
  //A este se le pasa un objeto en la 
  savePost(post: Post) {
    return this.http.post(`${this.API_URI}/posts`, post);
  }

  updatePost(id: string|number, updatePost: Post): Observable<Post> {
    return this.http.put(`${this.API_URI}/posts/${id}`, updatePost);
  }
}
