import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detay',
  templateUrl: './user-detay.component.html',
  styleUrls: ['./user-detay.component.css'],
  providers:[PostService]
})
export class UserDetayComponent {

  posts:any;
  userid:string='';


  constructor( private postservice:PostService,
              private activatedRoute:ActivatedRoute) {
                this.activatedRoute.params.subscribe(params => {
                  this.userid = params['usersid'];
                  
                  // paramValue, URL'deki 'paramName' parametresinin değeridir
                });

  }

 ngOnInit(){
  
   this.postservice.getbyid(this.userid)
   .subscribe(response=>{
     this.posts=response;
   });
 }





}



