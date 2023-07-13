import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tablo',
  templateUrl: './tablo.component.html',
  styleUrls: ['./tablo.component.css'],
  providers:[]
})
export class TabloComponent {

 
  title = 'task';
  users:any;
  searchData:string='';

  
  constructor( private service:PostService) {

   }

  ngOnInit(){
    this.service.getPosts()
    .subscribe(response=>{
      this.users=response;
    });
  }



  delete(userid:any){
    // this.service.deleteUser(userid).subscribe((result)=>{console.log(result);}
    //    );
    this.users=this.users.filter((x:any)=>x.id!==userid)
 
   }





}
