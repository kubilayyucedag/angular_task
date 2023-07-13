import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabloComponent } from './tablo/tablo.component';
import {HttpClientModule} from  '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { UserDetayComponent } from './user-detay/user-detay.component';
import { UserspostsComponent } from './usersposts/usersposts.component';
import { CommentComponent } from './comment/comment.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    TabloComponent,
    SearchFilterPipe,
    UserDetayComponent,
    UserspostsComponent,
    CommentComponent
    
      
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
