import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserpostsService {


  private url="https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

 
  getbyid(id:any){
    
    return this.http.get(this.url+"?userId="+id)

  }


}
