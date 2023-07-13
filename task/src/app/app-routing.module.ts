import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import  {PostService} from  './services/post.service';
import { UserDetayComponent } from './user-detay/user-detay.component';
import { TabloComponent } from './tablo/tablo.component';
import { UserspostsComponent } from './usersposts/usersposts.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'users', component: TabloComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }, 
  {path:'users/:usersid',component:UserDetayComponent},
  {path:'users/:usersid/posts',component:UserspostsComponent},
  {path:'users/:usersid/:posts/:comments',component:CommentComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
