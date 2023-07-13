import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 private  baseUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.baseUrl);
  }

  deleteUser(userid:any){

    return this.http.delete(`${this.baseUrl}/${userid}`);

  }

  getbyid(id:any){

    return this.http.get(this.baseUrl+"/"+id)


  }

  getposts(id:any){

    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
// https://jsonplaceholder.typicode.com/users/${userid}