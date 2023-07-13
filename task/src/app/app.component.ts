import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'task';
  posts:any;
  searchData:string='';

  
  constructor( private service:PostService) {

   }

  ngOnInit(){
    this.service.getPosts()
    .subscribe(response=>{
      this.posts=response;
    });
  }




}
