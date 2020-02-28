import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/posts/register`);
  }

  getUser(id: string){
    return this.http.get( `${this.API_URI}/posts/register/${id}`);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/posts/register/${id}`);
  }

  savePost(user: User) {
    return this.http.post(`${this.API_URI}/posts/register`, user);
  }

  updatePost(id: string|number, updateUser: User): Observable<User> {
    return this.http.put(`${this.API_URI}/posts/${id}`, updateUser);
  }

}
