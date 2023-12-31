import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  private url="https://jsonplaceholder.typicode.com/comments"
  constructor(private http:HttpClient) { 

  }

  getComment(id:any){
    return this.http.get(this.url+"?postId="+id)
  }


}
