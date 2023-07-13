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



  getbyid(id:any){

    return this.http.get(this.baseUrl+"/"+id)


  }

  

}
// https://jsonplaceholder.typicode.com/users/${userid}