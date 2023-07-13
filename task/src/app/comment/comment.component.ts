import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers:[CommentService]
})
export class CommentComponent {
comment:string='';
id:any;
constructor(private service:CommentService,
            private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.comment = params['comments'];});
  
}
  ngOnInit(){
    this.service.getComment(this.comment).subscribe(response=>{this.id=response;});
  }



}
