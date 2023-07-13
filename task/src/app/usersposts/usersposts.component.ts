import { Component } from '@angular/core';
import { UserpostsService } from '../services/userposts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usersposts',
  templateUrl: './usersposts.component.html',
  styleUrls: ['./usersposts.component.css'],
  providers:[UserpostsService]
})
export class UserspostsComponent {

  postid:string='';
  postss :any;
  constructor(private service:UserpostsService,
               private activatedRoute:ActivatedRoute ) {

                this.activatedRoute.params.subscribe(params => {
                  this.postid = params['usersid'];});
    
    
  }

    ngOnInit(){
      this.service.getbyid(this.postid)
      .subscribe(response=>{
        this.postss=response;
        
      });  
      

    }
  
  
  }
