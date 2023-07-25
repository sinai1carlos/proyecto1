import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(post:Post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',post);
  }

  updatePost(post:Post){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts${post.id}`,post)
  }
}
